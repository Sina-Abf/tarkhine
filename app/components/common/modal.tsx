import { useState, Fragment, Dispatch, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CloseIcon } from '@/public/icons';

interface TModal {
  title: string;
  description: string;
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal(props: TModal) {
  return (
    <Transition
      show={props.isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog className="relative z-50" onClose={() => props.setIsOpen(false)}>
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px]"
          aria-hidden="true"
        />

        <div className="rounded-lg overflow-hidden fixed bg-white text-black h-fit top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center ">
          <Dialog.Panel>
            <Dialog.Title className="text-3xl flex justify-between bg-gray-3 w-full text-center p-8 font-semibold">
              <h3 className="text-center w-full">{props.title}</h3>
              <button
                onClick={() => props.setIsOpen(false)}
                className="w-[25px] h-[25px] fill-gray-7"
              >
                <CloseIcon />
              </button>
            </Dialog.Title>
            <Dialog.Description className="p-24 text-2xl">
              {props.description}
              {props.content}
            </Dialog.Description>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
