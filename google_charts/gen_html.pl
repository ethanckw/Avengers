#!/usr/bin/env perl
use warnings;
use strict;
use Data::Dumper;

my $cmd = 'ls -f1 | egrep js$';
chomp( my @files = `$cmd` );
for my $file (@files) {
    my ($name) = $file =~ /(.+)\.js/;
    create_html($name, $file);
}
exit 0;

sub create_html {
    my ($name, $file) = @_;
    open my $fh, ">$name.html" or die $!;
    print $fh <<HTML
<html>
  <head>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript" src="$file"></script>
    <script type="text/javascript">
      google.load("visualization", "1", {packages:["corechart"]});
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
