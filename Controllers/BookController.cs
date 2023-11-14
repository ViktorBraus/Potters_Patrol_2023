using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace ReactApp.Controllers
{
    public class BooksController : Controller
    {
        BookAccessLayer objbook = new BookAccessLayer();

        [HttpGet]
        [Route("api/Book/Index")]
        public IEnumerable<Book> Index()
        {
            return objbook.GetAllBooks();
        }

        [HttpPost]
        [Route("api/Book/Create")]
        public int Create(Book book)
        {
            return objbook.AddBook(book);
        }

        [HttpGet]
        [Route("api/Book/Details/{id}")]
        public Book Details(int id)
        {
            return objbook.GetBookData(id);
        }

        [HttpPut]
        [Route("api/Book/Edit")]
        public int Edit(Book book)
        {
            return objbook.UpdateBook(book);
        }

        [HttpDelete]
        [Route("api/Book/Delete/{id}")]
        public int Delete(int id)
        {
            return objbook.DeleteBook(id);
        }
    }
}