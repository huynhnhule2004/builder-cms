"use client";

export default function ProposalsTab() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="mb-4">
        <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Build a more powerful proposal
      </h3>
      <p className="text-gray-600 text-center max-w-md mb-2">
        If you convert your Lead into a Job, you can use features like Estimates, Bids, and Selections to build your proposal. Select "+ Job" to get started, or
        <a href="#" className="text-blue-600 hover:underline ml-1">learn more</a>
      </p>
    </div>
  );
}
