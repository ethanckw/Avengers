#!/usr/bin/env perl
use warnings;
use strict;
use Data::Dumper;

open my $INDEX_HTML, ">index.html"
    or die $!;

my $cmd = 'ls -f1 | egrep html$ | grep -v index | sort';
chomp( my @files = `$cmd` );

header();

for my $file (@files) {
    my ($name) = $file =~ /(.+)\.html/;
    $name =~ s/_/ /g;
    $name = join ' ', map { ucfirst } split / /, $name;
    div($file, $name);
}

footer();

exit 0;

sub header {
    print $INDEX_HTML <<HEADER;
<html>
  <head>
  </head>
  <body>
HEADER
}

sub footer {
    print $INDEX_HTML <<FOOTER;
  </body>
</html>
FOOTER
}

sub div {
    my ($file, $name) = @_;
    print $INDEX_HTML <<DIV;

    <div>
      <a href="$file">$name</a>
      <iframe src="$file" scrolling="no" width="900px" height="500"></iframe>
      <hr>
    </div>
DIV
}

__END__

=head1 OVERVIEW 

    Generate a new index.html file pointing to all of the charts.

=head1 USAGE

    perl gen_index.pl

=cut
