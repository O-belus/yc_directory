import SearchForm from "@/components/SearchForm"
import StartupCard from "@/components/StartupCard"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: "Vlad",
    },
    _id: 1,
    description: "this is a description",
    image: "https://images.unsplash.com/photo-1649171818128-0a8f390e990c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJsYWNrJTIwY2F0fGVufDB8fDB8fHww",
    category: "Cats",
    title: "CATS",
  }]
  console.log(new Date())

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          PITCH YOUR STARTUP, <br />
          connect with entreprenuers
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get noticed in virtual competitions
        </p>
        <SearchForm query={query} />
      </section>


      <section className=" section_container ">
        <p className=" text-30-semibold ">
          {query ? `Search results for "${query}"` : `All startups` }
        </p>

        <ul className=" mt-7 card_grid ">
          {posts.length> 0 ? (
            posts.map((post:StartupCardType, index: number) => (
              < StartupCard key={post?._id} post={post} />
            ))
          ): (
            <p className="no_results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}
