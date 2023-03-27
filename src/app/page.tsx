import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-secondary">
      <header>
        <title>Homepage</title>
      </header>
      <div>
        <div className="mx-20 px-20 pt-5 font-Montserrat">
          <div className="my-5">
          <h1 className="text-4xl font-bold underline">What is STEM7?</h1>
          <p className="text-xl">
            The STEM 7 are skills and behaviours employers look for in potential
            employees. They are essential for you to progress to further study
            or employment. Although STEM 7 are behaviours desired by science,
            technology, engineering and maths industries, these skills are
            relevant to all industries. Being able to demonstrate your use of
            these skills will help you impress in interviews for college,
            university and work.
          </p>
          </div>
          <div className="my-5">
          <h2 className="text-2xl font-semibold underline">Creative Thinking</h2>
          <p className="text-xl">
            Creative thinking involves putting forward your own ideas and
            solutions. Think of examples where you have suggested a method of
            approaching a task or a way of fixing a problem.
          </p>
          </div>
          <div className="my-5">
          <h2 className="text-2xl font-semibold underline">Communication</h2>
          <p className="text-xl">
            Communication involves clearly explaining what you mean and doing
            your best to understand others. Think of examples where you have
            explained a tricky subject or ensured you interpreted directions
            correctly.
          </p>
          </div>
          <div className="my-5">
          <h2 className="text-2xl font-semibold underline">Problem Solving</h2>
          <p className="text-xl">
            Problem solving involves identifying key issues, using knowledge and
            experience to tackle problems, developing and testing possible
            solutions and not being put off by setbacks. Think of examples where
            you have used your knowledge and experience to fix an issue or
            suggest a solution.
          </p>
          </div>
          <div className="my-5">
          <h2 className="text-2xl font-semibold underline">Intellectual Curiosity</h2>
          <p className="text-xl">
            Intellectual curiosity involves being willing to learn new things;
            learning from your successes and failures, evolving and doing things
            better. Think of examples where you have challenged yourself to
            learn something new or where you’ve improved on previous work
          </p>
          </div>
          <div className="my-5">
          <h2 className="text-2xl font-semibold underline">Data-Driven Decisions</h2>
          <p className="text-xl">
            Data-driven decisions involve using numbers and data to obtain
            meaningful information. Think of examples where you have used data
            and statistics to inform a decision or draw a conclusion.
          </p>
          </div>
          <div className="my-5">
          <h2 className="text-2xl font-semibold underline">Flexibility</h2>
          <p className="text-xl">
            Flexibility involves learning new things, adapting and improving as
            well as planning your work to meet deadlines and targets, organising
            your time, monitoring your progress and adjusting your work to stay
            on track. Think of examples where you have changed the way you work
            or tried a new idea.
          </p>
          </div>
          <div className="my-5">
          <h2 className="text-2xl font-semibold underline">Collaboration</h2>
          <p className="text-xl">
            Collaboration involves understanding how to best work with people
            with different skills, backgrounds and personalities while
            respecting, considering and valuing others. Think of examples of
            successful team projects or where you’ve worked with someone to
            overcome a challenge.{" "}
          </p>
          </div>
        </div>
      </div>
    </main>
  );
}
