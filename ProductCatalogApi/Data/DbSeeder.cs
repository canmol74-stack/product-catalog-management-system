using ProductCatalogApi.Models;

namespace ProductCatalogApi.Data
{
    public static class DbSeeder
    {
        public static void Seed(AppDbContext db)
        {
            if (!db.Categories.Any())
            {
                var c1 = new Category { Name = "Electronics" };
                var c2 = new Category { Name = "Books" };
                db.Categories.AddRange(c1, c2);
                db.SaveChanges();

                db.Products.AddRange(
                    new Product { Name = "Wireless Mouse", Description = "Ergonomic mouse", Price = 699, CreatedDate = DateTime.UtcNow, CategoryId = c1.Id },
                    new Product { Name = "C# in Depth", Description = "Programming book", Price = 799, CreatedDate = DateTime.UtcNow, CategoryId = c2.Id }
                );
                db.SaveChanges();
            }
        }
    }
}
