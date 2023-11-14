using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace ReactApp.Controllers
{
    public class MoviesController : Controller
    {
        MovieAccessLayer objmovie = new MovieAccessLayer();

        [HttpGet]
        [Route("api/Movie/Index")]
        public IEnumerable<Movie> Index()
        {
            return objmovie.GetAllMovies();
        }

        [HttpPost]
        [Route("api/Movie/Create")]
        public int Create(Movie movie)
        {
            return objmovie.AddMovie(movie);
        }

        [HttpGet]
        [Route("api/Movie/Details/{id}")]
        public Movie Details(int id)
        {
            return objmovie.GetMovieData(id);
        }

        [HttpPut]
        [Route("api/Movie/Edit")]
        public int Edit(Movie movie)
        {
            return objmovie.UpdateMovie(movie);
        }

        [HttpDelete]
        [Route("api/Movie/Delete/{id}")]
        public int Delete(int id)
        {
            return objmovie.DeleteMovie(id);
        }
    }
}