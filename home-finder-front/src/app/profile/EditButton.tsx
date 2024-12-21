"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { addImages } from "@/services/userService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface EditButtonProps {
	listingId: number;
}

const EditButton: React.FC<EditButtonProps> = ({ listingId }) => {
	const router = useRouter();
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [open, setOpen] = useState<boolean>(false);

	const handleSave = async () => {
		if (!selectedFile) {
			return;
		}
		const formData = new FormData();
		formData.append("file", selectedFile);
		const data = await addImages(formData, listingId);
		if (data?.status == 200) {
			setOpen(false);
			toast("Successful", {
				description: "Image Updated Successfully",
				action: {
					label: "Undo",
					onClick: () => console.log("Undo"),
				},
			});
		}
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">Add Image</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Image</DialogTitle>
					<DialogDescription>You can add a picture to your listing here.</DialogDescription>
				</DialogHeader>
				<div>
					<div className="w-full h-40 mx-auto bg-gray-100 flex items-center justify-center">{previewUrl ? <img src={previewUrl} alt="Preview" className="object-cover w-full h-full" /> : <span>Resim seçilmedi.</span>}</div>
				</div>
				<DialogFooter className="flex gap-3 items-center">
					<input
						ref={fileInputRef}
						type="file"
						accept="image/*"
						className="hidden"
						onChange={(e) => {
							const file = e.target.files?.[0];
							if (file) {
								setSelectedFile(file);
								setPreviewUrl(URL.createObjectURL(file));
							}
						}}
					/>
					<Button
						onClick={() => {
							fileInputRef.current?.click();
						}}
						type="button"
					>
						Choose Image
					</Button>
					<Button onClick={handleSave} type="button" disabled={!selectedFile}>
						Save
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default EditButton;
