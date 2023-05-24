import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'test@test.io',
    firstname: 'Aa',
    lastname: 'Bb',
    city: 'Paris',
    password: 'test'
  },
]

async function main() {

  // exemple get all user

  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers)

  // create one user

  // await prisma.user.create({
  // data: {
  //     email: 'test@test.com',
  //     firstname: 'Test',
  //     lastname: 'Testtt',
  //     city: 'Paris',
  //     password: 'test'
  //  },
  // })

  // const allUsers = await prisma.user.findMany();
  // console.dir(allUsers, { depth: null })

  // categories 
  
  // await prisma.category.create({
  // data: {
  //       name: 'plante d\'extérieur',
  //  },
  // })

  // delete one user by id
  
  // const deletedUser = await prisma.category.delete({
  //   where: { id: 1 },
  // })

  const allCategories = await prisma.category.findMany();
  console.dir(allCategories, { depth: null })
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })