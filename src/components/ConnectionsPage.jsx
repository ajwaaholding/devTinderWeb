import React, { useState, useEffect } from "react";

const ConnectionsPage = () => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("matches");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with API calls in a real app
  useEffect(() => {
    const mockConnections = [
      {
        id: 1,
        name: "Alex Johnson",
        age: 28,
        bio: "Adventure seeker and coffee enthusiast",
        distance: "3 miles away",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        lastMessage: "Hey! How's your week going?",
        timestamp: "2 hours ago",
        status: "matched",
        mutualInterests: ["Hiking", "Photography"],
        unread: true,
      },
      {
        id: 2,
        name: "Sarah Miller",
        age: 25,
        bio: "Art lover and dog mom",
        distance: "5 miles away",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        lastMessage: "Let's meet up this weekend!",
        timestamp: "1 day ago",
        status: "matched",
        mutualInterests: ["Art", "Dogs"],
        unread: false,
      },
      {
        id: 3,
        name: "James Wilson",
        age: 30,
        bio: "Professional chef and traveler",
        distance: "10 miles away",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        lastMessage: "I'll cook for you sometime",
        timestamp: "3 days ago",
        status: "matched",
        mutualInterests: ["Cooking", "Travel"],
        unread: false,
      },
      {
        id: 4,
        name: "Emma Davis",
        age: 27,
        bio: "Yoga instructor and bookworm",
        distance: "2 miles away",
        photo: "https://randomuser.me/api/portraits/women/33.jpg",
        lastMessage: "Namaste! Ready for our session?",
        timestamp: "1 week ago",
        status: "liked",
        mutualInterests: ["Yoga", "Reading"],
        unread: false,
      },
    ];

    setTimeout(() => {
      setConnections(mockConnections);
      setLoading(false);
    }, 1000);
  }, []);

  const handleUnmatch = (id) => {
    setConnections(connections.filter((connection) => connection.id !== id));
  };

  const filteredConnections = connections.filter((connection) => {
    // Filter by tab
    if (activeTab === "matches" && connection.status !== "matched")
      return false;
    if (activeTab === "likes" && connection.status !== "liked") return false;

    // Filter by search query
    if (
      searchQuery &&
      !connection.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-red-500">Connections</h1>
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search connections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Tabs */}
        <div className="flex border-b mb-4">
          <button
            onClick={() => setActiveTab("matches")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "matches"
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Matches
          </button>
          <button
            onClick={() => setActiveTab("likes")}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === "likes"
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Likes
          </button>
        </div>

        {/* Connections List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {loading ? (
            <div className="p-8 flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-500"></div>
            </div>
          ) : filteredConnections.length === 0 ? (
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
              <h3 className="mt-2 text-sm font-medium">No connections found</h3>
              <p className="mt-1 text-sm">
                {activeTab === "matches"
                  ? "You'll see your matches here when you connect with someone."
                  : "You'll see people who liked you here."}
              </p>
            </div>
          ) : (
            <ul className="divide-y">
              {filteredConnections.map((connection) => (
                <li key={connection.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 relative">
                      <img
                        className="h-14 w-14 rounded-full object-cover"
                        src={connection.photo}
                        alt={connection.name}
                      />
                      {connection.unread && (
                        <div className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></div>
                      )}
                    </div>
                    <div className="ml-4 flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900 truncate">
                            {connection.name}, {connection.age}
                            {connection.status === "matched" && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                Matched
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {connection.distance}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleUnmatch(connection.id)}
                            className="p-1 text-gray-400 hover:text-red-500"
                            title="Unmatch"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {connection.lastMessage && (
                        <p
                          className={`mt-1 text-sm truncate ${
                            connection.unread
                              ? "font-semibold text-gray-900"
                              : "text-gray-600"
                          }`}
                        >
                          {connection.lastMessage}
                        </p>
                      )}

                      {connection.mutualInterests &&
                        connection.mutualInterests.length > 0 && (
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-1">
                              {connection.mutualInterests.map(
                                (interest, index) => (
                                  <span
                                    key={index}
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                                  >
                                    {interest}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        )}

                      <p className="mt-2 text-xs text-gray-400">
                        {connection.timestamp}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
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

export default ConnectionsPage;
