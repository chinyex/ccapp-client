"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ProfileCover() {
  const [cover, setCover] = useState("/images/profile/cover.png");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isCropOpen, setIsCropOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [zoom, setZoom] = useState(1);

  // Image position
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);

  const dragStartRef = useRef({
    x: 0,
    y: 0,
    positionX: 50,
    positionY: 50,
  });

  const handleCoverChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setSelectedImage(imageUrl);
    setIsCropOpen(true);

    // Reset editor
    setZoom(1);
    setPositionX(50);
    setPositionY(50);

    event.target.value = "";
  };

  const handleCancelCrop = () => {
    setIsCropOpen(false);
    setSelectedImage(null);
    setIsDragging(false);
  };

  const handleSaveCover = () => {
    if (!selectedImage) return;

    setCover(selectedImage);

    setIsCropOpen(false);
    setSelectedImage(null);
    setIsDragging(false);
  };

  /*
   * Start dragging
   */
  const handlePointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.preventDefault();

    setIsDragging(true);

    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      positionX,
      positionY,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  /*
   * Move image while dragging
   */
  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;

    const deltaX = event.clientX - dragStartRef.current.x;
    const deltaY = event.clientY - dragStartRef.current.y;

    /*
     * Convert mouse movement into percentage movement.
     *
     * The multiplier controls how sensitive dragging feels.
     */
    const sensitivity = 0.35;

    const newPositionX =
      dragStartRef.current.positionX - deltaX * sensitivity;

    const newPositionY =
      dragStartRef.current.positionY - deltaY * sensitivity;

    setPositionX(Math.max(0, Math.min(100, newPositionX)));
    setPositionY(Math.max(0, Math.min(100, newPositionY)));
  };

  /*
   * Stop dragging
   */
  const handlePointerUp = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already have been released.
    }
  };

  return (
    <>
      {/* ================= COVER ================= */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="relative h-48 w-full sm:h-56 md:h-64">
          <Image
            src={cover}
            alt="Cover Photo"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="object-cover object-center"
          />

          {/* Change Cover */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-4 right-4 rounded-xl border border-white/30 bg-black/60 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition hover:bg-black/80"
          >
            Change Cover
          </button>

          {/* File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
            className="hidden"
          />
        </div>
      </section>

      {/* ================= CROP EDITOR ================= */}
      {isCropOpen && selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Edit Cover Photo
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Drag the image to position it. Use the zoom control to
                resize it.
              </p>
            </div>

            {/* ================= CROP AREA ================= */}
            <div
              className={`relative mx-auto aspect-[3/1] w-full max-w-3xl overflow-hidden rounded-2xl bg-slate-900 ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              {/* Image */}
              <Image
                src={selectedImage}
                alt="Cover preview"
                fill
                draggable={false}
                sizes="(max-width: 768px) 100vw, 768px"
                className="pointer-events-none select-none object-cover transition-transform duration-100"
                style={{
                  transform: `scale(${zoom})`,
                  objectPosition: `${positionX}% ${positionY}%`,
                }}
              />

              {/* Dark overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/20" />

              {/* Crop frame */}
              <div className="pointer-events-none absolute inset-4 rounded-xl border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.45)] sm:inset-8" />

              {/* Corner indicators */}
              <div className="pointer-events-none absolute inset-4 sm:inset-8">
                <div className="absolute left-0 top-0 h-7 w-7 border-l-4 border-t-4 border-white" />

                <div className="absolute right-0 top-0 h-7 w-7 border-r-4 border-t-4 border-white" />

                <div className="absolute bottom-0 left-0 h-7 w-7 border-b-4 border-l-4 border-white" />

                <div className="absolute bottom-0 right-0 h-7 w-7 border-b-4 border-r-4 border-white" />
              </div>

              {/* Drag instruction */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-black/50 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
                  {isDragging
                    ? "Moving image..."
                    : "Drag image to reposition"}
                </span>
              </div>
            </div>

            {/* ================= CONTROLS ================= */}
            <div className="mx-auto mt-7 max-w-3xl">
              {/* Zoom */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">
                    Zoom
                  </label>

                  <span className="text-sm text-slate-500">
                    {zoom.toFixed(1)}x
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.1"
                  value={zoom}
                  onChange={(event) =>
                    setZoom(Number(event.target.value))
                  }
                  className="w-full accent-blue-600"
                />
              </div>
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="mx-auto mt-7 flex max-w-3xl flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleCancelCrop}
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSaveCover}
                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Save Cover
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}