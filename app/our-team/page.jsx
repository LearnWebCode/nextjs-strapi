import Link from "next/link"

async function getAllTeamMembers() {
  const membersPromise = await fetch("http://localhost:1337/api/team-members?populate=*")
  const members = await membersPromise.json()
  return members.data
}

export default async function Page() {
  const members = await getAllTeamMembers()

  return (
    <div>
      <h1 className="text-4xl mb-6 font-bold text-gray-700">Our Team</h1>
      <div className="grid grid-cols-2 gap-6">
        {members.map(member => {
          return (
            <Link
              className="group grid grid-cols-[140px_1fr] bg-white shadow rounded-lg overflow-hidden relative hover:bg-gradient-to-r from-white to-amber-50"
              key={member.id}
              href={`/our-team/${member.slug}`}
            >
              <div className="relative overflow-hidden">
                <img
                  className="transition duration-300 absolute inset-0 h-full w-full object-cover group-hover:scale-125 group-hover:rotate-12"
                  src={member.photo.formats.medium.url}
                />
              </div>

              <div className="p-4">
                <p className="text-xl text-gray-600 font-bold group-hover:text-gray-700">{member.name}</p>
                <p class="text-sm text-gray-500 leading-6">{member.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
