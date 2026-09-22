"use client";

import { Users, MoreVertical, Eye } from "lucide-react";

const pipelineStages = [
  {
    id: "applied",
    title: "Applied",
  },
  {
    id: "screening",
    title: "Screening",
  },
  {
    id: "shortlisted",
    title: "Shortlisted",
  },
];

const candidates = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "Senior React Developer",
    email: "rahul@gmail.com",
    experience: "4 Years",
    appliedDate: "08 Sep 2026",
    stage: "applied",
  },
  {
    id: 2,
    name: "Priya Singh",
    position: "UI/UX Designer",
    email: "priya@gmail.com",
    experience: "3 Years",
    appliedDate: "07 Sep 2026",
    stage: "screening",
  },
  {
    id: 3,
    name: "Amit Kumar",
    position: "Backend Developer",
    email: "amit@gmail.com",
    experience: "5 Years",
    appliedDate: "06 Sep 2026",
    stage: "shortlisted",
  },
];

export default function page() {
  return (
    <div className="p-5">

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Recruitment Pipeline
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track candidates through the hiring process
          </p>
        </div>

        <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
          + Add Candidate
        </button>

      </div>

      {/* Summary */}
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Users size={20} />
        </div>

        <div>
          <p className="text-xs text-slate-400">
            Total Candidates
          </p>

          <p className="text-lg font-semibold text-slate-700">
            {candidates.length}
          </p>
        </div>

      </div>

      {/* Pipeline */}
      <div className="overflow-x-auto pb-5">

        <div className="flex min-w-max gap-4">

          {pipelineStages.map((stage) => {

            const stageCandidates = candidates.filter(
              (candidate) =>
                candidate.stage === stage.id
            );

            return (
              <div
                key={stage.id}
                className="w-[280px] min-w-[280px] rounded-xl bg-slate-100 p-3"
              >

                {/* Column Header */}
                <div className="mb-3 flex items-center justify-between px-1">

                  <h2 className="text-sm font-semibold text-slate-700">
                    {stage.title}
                  </h2>

                  <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-xs font-semibold text-slate-500 shadow-sm">
                    {stageCandidates.length}
                  </span>

                </div>

                {/* Cards */}
                <div className="space-y-3">

                  {stageCandidates.map((candidate) => (

                    <div
                      key={candidate.id}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                    >

                      {/* Candidate Header */}
                      <div className="flex items-start justify-between gap-2">

                        <div>
                          <h3 className="text-sm font-semibold text-slate-800">
                            {candidate.name}
                          </h3>

                          <p className="mt-1 text-xs text-slate-500">
                            {candidate.position}
                          </p>
                        </div>

                        <button className="rounded-md p-1 text-slate-400 hover:bg-slate-100">
                          <MoreVertical size={17} />
                        </button>

                      </div>

                      {/* Candidate Details */}
                      <div className="mt-3 space-y-1.5">

                        <p className="text-xs text-slate-500">
                          {candidate.email}
                        </p>

                        <p className="text-xs text-slate-500">
                          Experience: {candidate.experience}
                        </p>

                        <p className="text-xs text-slate-500">
                          Applied: {candidate.appliedDate}
                        </p>

                      </div>

                      {/* Actions */}
                      <div className="mt-4 flex gap-2">

                        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-md border border-slate-200 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                          <Eye size={14} />
                          View
                        </button>

                        <button className="flex-1 rounded-md bg-blue-50 py-1.5 text-xs font-medium text-blue-600 hover:bg-blue-100">
                          Move
                        </button>

                      </div>

                    </div>

                  ))}

                  {/* Empty Column */}
                  {stageCandidates.length === 0 && (
                    <div className="rounded-lg border border-dashed border-slate-300 bg-white/50 px-3 py-8 text-center">

                      <p className="text-xs text-slate-400">
                        No candidates
                      </p>

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}