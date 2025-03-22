import Image from 'next/image';
import { GlobeIcon, BackpackIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import axios from 'axios';
import { Useruser } from '@/types/types';

async function getUsers(): Promise<Useruser[]> {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');

  return data.results.map((character: any) => ({
    id: character.id,
    first_name: character.name.split(' ')[0],
    last_name: character.name.split(' ').slice(1).join(' '),
    avatar: character.image,
    role: character.status,
    department: character.species,
    location: character.location.name,
    bio: `Origin: ${character.origin.name}`,
  }));
}

export default async function UsersList() {
  const users = await getUsers();

  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Members</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map(user => (
          <li
            key={user.id}
            className="transition-transform duration-200 hover:scale-[1.02]"
          >
            <Card>
              <div className="relative w-full h-52">
                <Image
                  src={user.avatar}
                  alt={user.first_name}
                  fill
                  
                  className="object-cover rounded-t-lg -translate-y-6"
                  priority={user.id < 3}
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold">
                  {user.first_name} {user.last_name}
                </h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BackpackIcon className="w-4 h-4" />
                  <p className="text-sm">
                    {user.role} · {user.department}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <GlobeIcon className="w-4 h-4" />
                  <p className="text-sm">{user.location}</p>
                </div>

                <p className="text-sm text-muted-foreground">{user.bio}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
