using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace potters_patrol.Models
{
    public class TestAccessLayer
    {
        myTestDBContext db = new myTestDBContext();
        public IEnumerable<Test> GetAllTests()
        {
            try
            {
                return db.Test.ToList();
            }
            catch
            {
                throw;
            }
        }
        public Test GetTest(int id)
        {
            try
            {
                Test test = db.Test.Find(id);
                return test;
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<QuestionDetail> GetAllQuestions()
        {
            try
            {
                return db.QuestionDetail.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<Answers> GetAllAnswers()
        {

            try
            {
                return db.Answers.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<TestResult> GetAllResults()
        {

            try
            {
                return db.TestResult.ToList();
            }
            catch
            {
                throw;
            }
        }
        //Get the details of a particular question  
        public QuestionDetail GetQuestionData(int id)
        {
            try
            {
                QuestionDetail question = db.QuestionDetail.Find(id);
                return question;
            }
            catch
            {
                throw;
            }
        }
      
    }
}
