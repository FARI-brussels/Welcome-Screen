import http.server
import socketserver
import re




class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):

    
        if self.path == '/' or re.match(r'^/\d+$', self.path):
            self.path = '/index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 8080

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()