#!/usr/bin/env perl
use warnings;
use strict;
use Data::Dumper;
use File::Basename;
use JSON;

use constant DEFAULT_HEIGHT => '500px';
use constant DEFAULT_WIDTH  => 'auto';
use constant DEFAULT_TITLE  => 'Avengers Chart';
use constant DEFAULT        => 0;
use constant DEFAULT_FOLDER => 'none';

my $cmd = 'find . | egrep js$';
chomp( my @files = `$cmd` );

my $file_data = [];
for my $file (@files) {
    my ($fullname, $dir) = fileparse($file);
    my ($name) = $fullname =~ /(.+)\.js/;
    my $meta = process_headers($file);
    my $html = create_html($name, $file, $meta);

    $dir =~ s|^\.\/||; # kill leading ./
    $dir =~ s|\/$||;   # kill trailing /
    push @$file_data, {
        name => $name,
        file => $html,
        meta => $meta,
        folder => $dir || DEFAULT_FOLDER,
    };
}

create_js_data($file_data);

exit 0;

sub create_html {
    my ($name, $file, $meta) = @_;
    my ($fname) = $file =~ /(.+)\.js$/;
    my $html = "$fname.html";
    open my $fh, ">$html" or die $!;

    my $google_package = $meta->{package};
    my $height = $meta->{height};
    my $width  = $meta->{width};

    my $google_load = $google_package
        ? qq(google.load("visualization", "1", {packages: ["$google_package"]});)
        : qq(google.load("visualization", "1"););

    print $fh <<HTML;
<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript" src="$file"></script>
    <script type="text/javascript">
      $google_load
      google.setOnLoadCallback(drawVisualization);
    </script>
  </head>
  <body>
    <div id="visualization" style="width: $width; height: $height;"></div>
  </body>
</html>
HTML

   return $html;
}

sub process_headers {
    my ($file) = @_;
    my $meta = {
        title  => DEFAULT_TITLE,
        height => DEFAULT_HEIGHT,
        width  => DEFAULT_WIDTH,
        default => DEFAULT,
    };
    open my $fh, $file or die $!;
    while(<$fh>) {
        if (my ($key, $value) = m|^// meta (\w+)=(.+)$|) {
            $meta->{$key} = $value;
        }
    }
    return $meta;
}

sub create_js_data {
    my ($data) = @_;
    my $h = {};
    my $json = {};
    map {
        push @{ $h->{ $_->{folder} } },
            {
                %{ $_->{meta} },
            file    => $_->{file},
            };
    } @$data;
    
    map {
        my @arr = @{ $h->{$_} };
        $json->{$_} = [
            sort {
                       $a->{default} <=> $b->{default}
                    || $a->{title} cmp $b->{title}
                } @arr
        ];
    } keys %$h;

    open my $fh, ">menu_data.js" or die $!;
    print $fh to_json($json);
    close $fh;
    1;
}


__END__

=head1 OVERVIEW 

    Generate a html files from js files.

=head1 USAGE

    perl gen_html.pl

=cut
