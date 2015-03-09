using System;
using Microsoft.AspNet.Mvc;

namespace DraftBored.Web.Controllers
{
    public class HomeController : Controller
    {
		public ActionResult Index()
		{
			return View();
		}
    }
}