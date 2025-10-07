using System.ComponentModel.DataAnnotations;

namespace ProductCatalogApi.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string Name { get; set; } = null!;

        public ICollection<Product>? Products { get; set; }
    }
}
