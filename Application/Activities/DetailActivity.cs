using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class DetailActivity
    {
        public class DetailActivityQuery : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<DetailActivityQuery, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Activity> Handle(DetailActivityQuery request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }     
    }
}