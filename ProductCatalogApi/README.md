# ProductCatalogApi (ASP.NET Core 6)

## How to run

1. Open `ProductCatalogApi.sln` or the `ProductCatalogApi.csproj` in Visual Studio 2022.
2. Build the project.
3. Run the project (it will create a SQLite database `productcatalog.db` in the project folder).
4. Swagger is available at `/swagger` during development.

Notes:
- Uses SQLite for simplicity (change to SQL Server by updating DbContext configuration).
