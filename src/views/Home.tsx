import React, { useState } from "react";
import { generateFibonacci } from "../utils/helper";
import SequenceItem from "../components/SequenceItem/SequenceItem";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Home: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [sequence, setSequence] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addValue = () => {
    if (index < 9) {
      const nextSequenceValue = generateFibonacci(index + 1)[index];
      setSequence([...sequence, nextSequenceValue]);
      setIndex(index + 1);
    } else {
      setIsModalOpen(true);
    }
  };

  const removeValue = () => {
    if (index > 0) {
      setSequence(sequence.slice(0, -1));
      setIndex(index - 1);
    }
  };

  const restartGame = () => {
    setSequence([]);
    setIndex(0);
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center ">
          <span className="font-medium text-2xl text-black pr-3">
            Current Index
          </span>
          <span className="font-bold text-3xl text-black">{index}</span>
        </div>
        <div className="flex gap-2">
          <Button onClick={addValue}>Add</Button>
          <Button onClick={removeValue}>Remove</Button>
          <Button variant="secondary" onClick={restartGame}>
            Restart
          </Button>
        </div>
      </div>
      <div className="bg-[#FCFCFC] border border-[#E4E4E4] rounded-[10px] px-[43px] min-h-screen py-[51px] my-[29px]">
        {sequence.map((value, idx) => (
          <div
            key={idx}
            className={`flex  ${
              value === 34
                ? "md:items-start items-center"
                : "pb-[46px] items-center"
            }`}
          >
            <div className="text-semibold text-[32px] w-8 ml-[5px]">
              {value}
            </div>
            <SequenceItem index={idx} count={value} />
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={restartGame}
        title={`Current index is ${index + 1}`}
        message="The game will restart"
      />
    </div>
  );
};

export default Home;
