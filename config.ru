use Rack::Static, 
  :urls => ["/img", "/js", "/css", "/partials", "/lib", "/lib/angular"],
  :root => "app"

run lambda { |env|
  req = Rack::Request.new(env)
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    req.path =~ /^\/sobre\.html/ ? File.open('app/sobre.html', File::RDONLY) : File.open('app/index.html', File::RDONLY)
  ]
}

