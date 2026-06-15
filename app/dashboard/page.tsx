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
  const router = useRouter();

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
              Welcome Back, {profile.fullName} 👋
            </h1>
            <p className="mt-2 text-gray-600">
              Measure • Learn • Grow
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

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
            <h2 className="mb-4 text-xl font-bold text-purple-700">
              Assessment Stats
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Assessments Taken</p>
                <p className="text-3xl font-bold">0</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Average Score</p>
                <p className="text-3xl font-bold">0%</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Certificates</p>
                <p className="text-3xl font-bold">0</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold text-purple-700">
              Corporate Readiness
            </h2>

            <p className="mb-6 text-gray-600">
              Take your first assessment and discover your strengths.
            </p>

            <button
              className="w-full rounded-xl bg-purple-600 px-4 py-3 font-semibold text-white hover:bg-purple-700"
            >
              Start Assessment
            </button>
          </div>

        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold text-purple-700">
            Recent Activity
          </h2>

          <p className="text-gray-500">
            No assessments completed yet.
          </p>
        </div>

      </div>
    </main>
  );
}