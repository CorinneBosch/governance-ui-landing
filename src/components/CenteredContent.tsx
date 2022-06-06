import clsxm from '@/lib/clsxm';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function CenteredContent(props: Props) {
  return (
    <div className='w-full'>
      <div
        className={clsxm(
          props.className,
          'max-w-[1320px]',
          'md:px-10',
          'mx-auto',
          'px-5',
          'w-full'
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
