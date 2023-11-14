using Microsoft.AspNetCore.Mvc;
using potters_patrol.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace potters_patrol.Controllers
{
    public class TestController : Controller
    {
        TestAccessLayer objtest = new TestAccessLayer();

        [HttpGet]
        [Route("api/Question/Index")]
        public IEnumerable<QuestionDetail> Index()
        {
            return objtest.GetAllQuestions();
        }
        [HttpGet]
        [Route("api/Tests/TestIndex")]
        public IEnumerable<Test> TestIndex()
        {
            return objtest.GetAllTests();
        }
        [HttpGet]
        [Route("api/Test/Details/{id}")]
        public Test TestDetails(int id)
        {
            return objtest.GetTest(id);
        }
        [HttpGet]
        [Route("api/Answer/AnswerIndex")]
        public IEnumerable<Answers> AnswerIndex()
        {
            return objtest.GetAllAnswers();
        }
        [HttpGet]
        [Route("api/Result/Index")]
        public IEnumerable<TestResult> ResultIndex()
        {
            return objtest.GetAllResults();
        }

    }
}
