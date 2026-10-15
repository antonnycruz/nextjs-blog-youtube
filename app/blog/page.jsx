import Link from 'next/link';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Error al obtener los posts');
  return res.json();
}

export default async function BlogPage() {
  const data = await getPosts();

  return (
    <section>
      <h1>Lista de blog</h1>

      {data.map(({ id, title, body }) => (
        <div key={id} className="mb-6">
          <h3>
            <Link href={`/blog/${id}`}>
              {id} - {title}
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </section>
  );
}