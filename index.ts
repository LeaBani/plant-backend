import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

  const allUsers = await prisma.user.findMany();
  console.dir(allUsers, { depth: null })
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