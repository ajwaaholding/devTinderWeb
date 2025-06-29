import React, { useState, useEffect } from "react";

const ConnectionRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  // Mock data - in a real app, you would fetch this from an API
  useEffect(() => {
    const mockRequests = [
      {
        id: 1,
        name: "Alex Johnson",
        age: 28,
        bio: "Adventure seeker and coffee enthusiast",
        distance: "3 miles away",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        timestamp: "2 hours ago",
        status: "pending",
        mutualInterests: ["Hiking", "Photography"],
      },
      {
        id: 2,
        name: "Sarah Miller",
        age: 25,
        bio: "Art lover and dog mom",
        distance: "5 miles away",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        timestamp: "1 day ago",
        status: "pending",
        mutualInterests: ["Art", "Dogs"],
      },
      {
        id: 3,
        name: "James Wilson",
        age: 30,
        bio: "Professional chef and traveler",
        distance: "10 miles away",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        timestamp: "3 days ago",
        status: "pending",
        mutualInterests: ["Cooking", "Travel"],
      },
      {
        id: 4,
        name: "Emma Davis",
        age: 27,
        bio: "Yoga instructor and bookworm",
        distance: "2 miles away",
        photo: "https://randomuser.me/api/portraits/women/33.jpg",
        timestamp: "1 week ago",
        status: "accepted",
        mutualInterests: ["Yoga", "Reading"],
      },
    ];

    setTimeout(() => {
      setRequests(mockRequests);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAccept = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "accepted" } : request
      )
    );
  };

  const handleDecline = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const filteredRequests = requests.filter((request) => {
    if (activeTab === "all") return true;
    return request.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-500">Tinder</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "all"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              All Requests
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "pending"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("accepted")}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "accepted"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Accepted
            </button>
          </div>

          {/* Requests List */}
          <div className="divide-y">
            {loading ? (
              <div className="p-8 flex justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-500"></div>
              </div>
            ) : filteredRequests.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium">
                  No connection requests
                </h3>
                <p className="mt-1 text-sm">
                  You'll see requests here when people want to connect with you.
                </p>
              </div>
            ) : (
              filteredRequests.map((request) => (
                <div key={request.id} className="p-4 flex items-start">
                  <div className="flex-shrink-0">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={request.photo}
                      alt={request.name}
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {request.name}, {request.age}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {request.distance} • {request.timestamp}
                        </p>
                      </div>
                      {request.status === "pending" && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleAccept(request.id)}
                            className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleDecline(request.id)}
                            className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Decline
                          </button>
                        </div>
                      )}
                      {request.status === "accepted" && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Accepted
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-700">{request.bio}</p>
                    {request.mutualInterests &&
                      request.mutualInterests.length > 0 && (
                        <div className="mt-2">
                          <span className="text-xs font-medium text-gray-500">
                            Mutual interests:
                          </span>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {request.mutualInterests.map((interest, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between">
            <button className="p-4 text-gray-400 hover:text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
            <button className="p-4 text-gray-400 hover:text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="p-4 text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
            <button className="p-4 text-gray-400 hover:text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </button>
            <button className="p-4 text-gray-400 hover:text-red-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ConnectionRequests;
