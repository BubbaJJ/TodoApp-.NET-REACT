using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoAppBackend.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Completed { get; set; } = false;
        public DateTime? DateAdded { get; set; } = DateTime.Now;
        public DateTime? DateDone { get; set; }
        public DateTime? DateDue { get; set; } = DateTime.Now.AddDays(3);
    }
}