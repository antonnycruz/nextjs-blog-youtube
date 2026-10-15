// 1. Obtener el post específico por ID
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Post no encontrado');
  return res.json();
}

// 2. Pre-generar las rutas estáticas (Equivalente a getStaticPaths)
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

// 3. Componente de la página del post
export default async function PostPage({ params }) {
  // Nota: En versiones recientes de Next.js App Router, 'params' es una Promesa
  const { id } = await params;
  const data = await getPost(id);

  return (
    <article>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
    </article>
  );
}