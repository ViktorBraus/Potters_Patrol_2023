using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Models
{
    public class MovieAccessLayer
    {
        myTestDBContext db = new myTestDBContext();

        public IEnumerable<Movie> GetAllMovies()
        {
            try
            {
                return db.Movies.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record   
        public int AddMovie(Movie movie)
        {
            try
            {
                db.Movies.Add(movie);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee  
        public int UpdateMovie(Movie movie)
        {
            try
            {
                db.Entry(movie).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee  
        public Movie GetMovieData(int id)
        {
            try
            {
                Movie movie = db.Movies.Find(id);
                return movie;
            }
            catch
            {
                throw;
            }
        }
        public byte[] GetImageData_Movie(int id)
        {
            try
            {
                Movie movie = db.Movies.Find(id);
                return movie.Movie_Image;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular employee  
        public int DeleteMovie(int id)
        {
            try
            {//emp == b
                Movie b = db.Movies.Find(id);
                db.Movies.Remove(b);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Get the list of Cities  
        //public List<TblCities> GetCities()
        //{
        //    List<TblCities> lstCity = new List<TblCities>();
        //    lstCity = (from CityList in db.TblCities select CityList).ToList();

        //    return lstCity;
        //}

    }
}
