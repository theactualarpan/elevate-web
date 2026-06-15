"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

type UserProfile = {
  fullName: string;
  email: string;
  gender: string;
  userType: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const initials = profile?.fullName
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        return;
      }

      setUser(currentUser);

      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfile(docSnap.data() as UserProfile);
      }
    });

    return () => unsubscribe();
  }, [router]);

  async function handleLogout() {
    await signOut(auth);
    router.push("/login");
  }

  if (!user || !profile) {
    return (
      <div className="flex min-h-screen items-center justify-center text-lg font-semibold">
        Loading Elevate...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome Back, {profile.fullName.split(" ")[0]} 👋
            </h1>

            <p className="mt-2 text-gray-600">
              {profile.userType === "student"
                ? "Student Account • Measure • Learn • Grow"
                : "College Account • Measure • Learn • Grow"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white shadow-lg hover:bg-purple-700"
              >
                {initials}
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-100 bg-white shadow-xl z-50">
                  <button className="block w-full px-4 py-3 text-left hover:bg-gray-50">
                    Profile
                  </button>

                  <button className="block w-full px-4 py-3 text-left hover:bg-gray-50">
                    Settings
                  </button>

                  <button className="block w-full px-4 py-3 text-left hover:bg-gray-50">
                    Certificates
                  </button>

                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-3 text-left text-red-500 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold">
            Corporate Readiness Assessment
          </h2>

          <p className="mt-3 text-purple-100">
            Discover your strengths and prepare for future opportunities.
          </p>

          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-purple-700 hover:bg-purple-50">
            Start Assessment
          </button>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
            <p className="text-sm text-gray-500">Assessments</p>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
            <p className="text-sm text-gray-500">Average Score</p>
            <p className="text-3xl font-bold">0%</p>
          </div>

          <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
            <p className="text-sm text-gray-500">Certificates</p>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-purple-700">
              Profile
            </h2>

            <div className="space-y-3 text-gray-700">
              <p><strong>Name:</strong> {profile.fullName}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Gender:</strong> {profile.gender}</p>
              <p><strong>User Type:</strong> {profile.userType}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-xl font-bold text-purple-700">
              Career Readiness Preview
            </h2>

            <div className="space-y-5">

              <div>
                <div className="mb-1 flex justify-between">
                  <span>Communication</span>
                  <span>70%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div className="h-3 w-[70%] rounded-full bg-purple-600"></div>
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span>Leadership</span>
                  <span>50%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div className="h-3 w-[50%] rounded-full bg-purple-600"></div>
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span>Problem Solving</span>
                  <span>80%</span>
                </div>

                <div className="h-3 rounded-full bg-gray-200">
                  <div className="h-3 w-[80%] rounded-full bg-purple-600"></div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </main>
  );
}