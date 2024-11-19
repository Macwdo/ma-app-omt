import { IconBarrierBlockOff } from '@tabler/icons-react'

export const LawsuitCard = () => {
  return (
    <div>
      <article className='rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6'>
        <div className='flex'>
          <IconBarrierBlockOff className='h-10 w-10 rounded-sm bg-blue-600 p-2 text-white' />
          <div className='flex flex-col items-center justify-center'>
            <span className='ml-4 text-sm font-medium text-gray-500'>
              Ultima atualização - 3 dias atrás
            </span>
          </div>
        </div>
        <div className='mt-2'>
          <h3 className='mt-0.5 text-lg font-medium text-gray-900'>
            20231239129321
          </h3>
        </div>

        <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>

        <a
          href='#'
          className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'
        >
          Find out more
          <span
            aria-hidden='true'
            className='block transition-all group-hover:ms-0.5 rtl:rotate-180'
          >
            &rarr;
          </span>
        </a>
      </article>
    </div>
  )
}
