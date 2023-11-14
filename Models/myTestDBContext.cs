using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Models
{
    public partial class myTestDBContext : DbContext
    {
        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<QuestionDetail> QuestionDetail { get; set; }
        public virtual DbSet<Answers> Answers { get; set; }
        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<UserContent> UserContent{ get; set; }
        public virtual DbSet<TestResult> TestResult { get; set; }
        public virtual DbSet<Forum> Forum { get; set; }
        public virtual DbSet<ForumMessages> ForumMessages { get; set; }
        public virtual DbSet<Test> Test{ get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-L13J1FA;Database=Potters_Patrol;Trusted_Connection=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answers>()
                .HasNoKey();
            modelBuilder.Entity<TestResult>()
                .HasNoKey();
        }
    }
}
