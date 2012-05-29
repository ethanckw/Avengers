#!/usr/bin/env perl
use warnings;
use strict;
use Data::Dumper;

my $cmd = 'ls -f1 | egrep js$';
chomp( my @files = `$cmd` );
for my $file (@files) {
    my ($name) = $file =~ /(.+)\.js/;
    chomp( my $google_package = `head -n 1 $file`);
    ($google_package) = $google_package =~ /(\w+)$/;
    create_html($name, $file, $google_package);
}
exit 0;

sub create_html {
    my ($name, $file, $google_package) = @_;
    open my $fh, ">$name.html" or die $!;

    my $google_load = $google_package
        ? qq(google.load("visualization", "1", {packages: ["$google_package"]});)
        : qq(google.load("visualization", "1"););

    print $fh <<HTML
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
    <div id="visualization" style="width: 900px; height: 500px;"></div>
  </body>
</html>
HTML

}

__END__

=head1 OVERVIEW 

    Generate a html files from js files.

=head1 USAGE

    perl gen_html.pl

=cut
