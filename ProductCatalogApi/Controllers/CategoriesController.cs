using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProductCatalogApi.Repositories;

namespace ProductCatalogApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryRepository _repo;
        private readonly IMapper _mapper;
        public CategoriesController(ICategoryRepository repo, IMapper mapper)
        {
            _repo = repo; _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var items = await _repo.GetAllAsync();
            var dto = items.Select(c => _mapper.Map<object>(c));
            return Ok(items.Select(c => new { c.Id, c.Name }));
        }
    }
}
