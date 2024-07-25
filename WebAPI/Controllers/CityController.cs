using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
//using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext dc;
        public CityController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet("")]
        public IActionResult GetCities()
        {
            var cities = dc.Cities.ToList();
            return Ok(cities);
        }
    }
}