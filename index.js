const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>İndex sayfası</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("Hakkımızda sayfası");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("İletişim sayfası");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.write("404 sayfa bulunamadı");
  }

  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`'Sunucu port ${port} de başlatıldı.'`);
});
