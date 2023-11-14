using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Models
{
    public class BookAccessLayer
    {
        myTestDBContext db = new myTestDBContext();

        public IEnumerable<Book> GetAllBooks()
        {
            try
            {
                return db.Books.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new employee record   
        public int AddBook(Book book)
        {
            try
            {
                db.Books.Add(book);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar employee  
        public int UpdateBook(Book book)
        {
            try
            {
                db.Entry(book).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular employee  
        public Book GetBookData(int id)
        {
            try
            {
                Book book = db.Books.Find(id);
                return book;
            }
            catch
            {
                throw;
            }
        }
        public byte[] GetImageData(int id)
        {
            try
            {
                Book book = db.Books.Find(id);
                return book.Book_Image;
            }
            catch
            {
                throw;
            }
        }
  
        public int DeleteBook(int id)
        {
            try
            {
                Book b = db.Books.Find(id);
                db.Books.Remove(b);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
