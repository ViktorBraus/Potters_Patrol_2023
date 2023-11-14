using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;

public class Book
{
    public int BookId { get; set; }
    public string Book_Name { get; set; }
    public byte[] Book_Image { get; set; }
    public string Book_description { get; set; }
    public string Book_url{ get; set; }
}
public class Movie
{
    public int MovieId { get; set; }
    public string Movie_Name { get; set; }
    public byte[] Movie_Image { get; set; }
    public string Movie_description { get; set; }
    public string Movie_url { get; set; }
}
public class Game
{
    public int GameId { get; set; }
    public string Game_Name { get; set; }
    public byte[] Game_Image { get; set; }
    public string Game_description { get; set; }
    public string Game_url { get; set; }
}

public class QuestionDetail
{
    public int Id { get; set; }
    public string TestTitle { get; set; }
    public int Question_Id { get; set; }
    public string Question { get; set; }
}

public class Answers
{
    public int AnswerId { get; set; }
    public int QuestionId { get; set; }
    public string Answer { get; set; }
}
public class User
{
    public int UserId { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
    public byte[] ProfileImage { get; set; }
}
public class Test
{
    [Key]
    public int TestId { get; set; }
    public string Test_Title { get; set; }
    public int Count_of_questions { get; set; }
    public int Result_ { get; set; }
}
public class UserContent
{
    public int Id { get; set; }
    public string UserName { get; set; }
    public string Faculty { get; set; }
    public byte[] FacultyImage { get; set; }
    public string Wand { get; set; }
    public byte[] WandImage { get; set; }
    public string Patronus { get; set; }
    public byte[] PatronusImage { get; set; }
}
public class TestResult
{
    public int Test_Id_ { get; set; }
    public string Result { get; set; }
    public byte[] ResultImage { get; set; }
}
public class Forum
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Creator { get; set; }
    public DateTime DateOfCreation { get; set; }
}
public class ForumMessages
{
    [Key]
    public int MessageId { get; set; }
    public int Forum_Id { get; set; }
    public string Forum_Title { get; set; }
    public string MessageSender { get; set; }
    public string Message { get; set; }
    public string DateOfSend { get; set; }
    public string TimeOfSend { get; set; }
}
