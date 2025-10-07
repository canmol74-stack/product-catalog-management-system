using System.ComponentModel.DataAnnotations;

namespace ProductCatalogApi.DTOs
{
    public class ProductCreateDto
    {
        [Required, MaxLength(200)]
        public string Name { get; set; } = null!;
        public string? Description { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required]
        public int CategoryId { get; set; }
    }
}
