using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
       // private readonly IHttpClientFactory _httpClientFactory;
        private IWebHostEnvironment _env;

        public class IndexFile
        {
            public string Value = "";
        }
        public HomeController(IWebHostEnvironment env)
        {
            _env = env;
        }
        public IActionResult Index()
        {
            var webRootDist = _env.WebRootPath + "\\dist";
            IndexFile _if = new IndexFile();
            _if.Value = System.IO.File.ReadAllText(Path.Combine(webRootDist, "index.html"));
            return View(_if);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
