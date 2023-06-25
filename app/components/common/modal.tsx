import { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CloseIcon } from '@/public/icons';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
interface TModal {
  title: string;
  description: string;
  content: React.ReactNode;
  className?: string;
  contentClassName?: string;
  modalClassName?: string;
  isModalVisible: boolean;
  toggleModalVisible: (bool: boolean) => void;
}

export default function Modal(props: TModal) {
  const pathname = usePathname();

  useEffect(() => {
    props.toggleModalVisible(false);
  }, [pathname]);

  return (
    <Transition
      show={props.isModalVisible || false}
      enter="transition duration-100 ease-out"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        className={classNames('relative z-50', props.className)}
        onClose={() => props.toggleModalVisible(false)}
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px]"
          aria-hidden="true"
        />

        <div
          className={classNames(
            'rounded-lg overflow-hidden fixed bg-white text-black h-fit top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center',
            props.modalClassName
          )}
        >
          <Dialog.Panel>
            <Dialog.Title className="text-3xl flex justify-between bg-gray-3 w-full text-center p-8 font-semibold">
              <span className="text-center w-full">{props.title}</span>
              <button
                onClick={() => props.toggleModalVisible(false)}
                className="w-[25px] h-[25px] fill-gray-7"
              >
                <CloseIcon />
              </button>
            </Dialog.Title>
            <Dialog.Description className="p-4 text-2xl text-center">
              {props.description}
            </Dialog.Description>
            <Dialog.Description
              className={classNames('', props.contentClassName)}
            >
              {props.content}
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
