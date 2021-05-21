import React from "react";

import {
	BrandGithub,
	Checkbox,
	FileText,
	Heart,
	Home,
	Package,
	Star,
} from "tabler-icons-react";
import {
	Alert,
	Avatar,
	Button,
	Dropdown,
	Navigation,
} from "tabler-react-typescript-dev";

const HomePage = () => {
	return (
		<div className="wrapper">
			<Navigation.Header
				theme="light"
				brandContent={
					<a href=".">
						<img
							src="https://preview.tabler.io/static/logo.svg"
							alt="Tabler"
							className="navbar-brand-image"
							width="110"
							height="32"
						/>
					</a>
				}
				buttons={[
					<Button shape="outline" color="white">
						<BrandGithub /> Source code
					</Button>,
					<Button shape="outline" color="white">
						<Heart color="#FC1870" /> Sponsor
					</Button>,
				]}
				avatar={
					<Avatar
						size="sm"
						url="https://tabler-react-typescript.jc21.com/assets/000m.jpg"
					/>
				}
				profileName="Paweł Kuna"
				profileSubName="UI Designer"
				notifications="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consectetur exercitationem fugiat in ipsa ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis et magni maxime necessitatibus ullam."
				hasUnreadNotifications={true}
				profileItems={[
					<Dropdown.Item key="m1-1">Set status</Dropdown.Item>,
					<Dropdown.Item key="m1-2">Profile &amp; account</Dropdown.Item>,
					<Dropdown.Item key="m1-3">Feedback</Dropdown.Item>,
					<Dropdown.Item divider key="m1-4" />,
					<Dropdown.Item key="m1-5">Settings</Dropdown.Item>,
					<Dropdown.Item key="m1-6">Logout</Dropdown.Item>,
				]}
			/>
			<Navigation.Menu
				theme="light"
				className="mb-3"
				items={[
					{
						title: "Home",
						icon: <Home />,
						active: true,
					},
					{
						title: "Interface",
						icon: <Package />,
						dropdownItems: [
							<Dropdown.Item key="i-buttons">Buttons</Dropdown.Item>,
							<Dropdown.Item key="i-card">Cards</Dropdown.Item>,
							<Dropdown.Item key="i-colors">Colors</Dropdown.Item>,
							<Dropdown.Item key="i-dropdowns">Dropdowns</Dropdown.Item>,
							<Dropdown.Item key="i-modals">Modals</Dropdown.Item>,
						],
					},
					{
						title: "Form elements",
						icon: <Checkbox />,
					},
					{
						title: "Extra",
						icon: <Star />,
						dropdownItems: [<Dropdown.Item key="e-todo">Todo</Dropdown.Item>],
					},
					{
						title: "Documentation",
						icon: <FileText />,
						href: "/documentation/index.html",
					},
				]}
				searchContent={
					<form action="." method="get">
						<div className="input-icon">
							<span className="input-icon-addon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<circle cx="10" cy="10" r="7"></circle>
									<line x1="21" y1="21" x2="15" y2="15"></line>
								</svg>
							</span>
							<input
								type="text"
								className="form-control"
								placeholder="Search…"
								aria-label="Search in website"
							/>
						</div>
					</form>
				}
			/>

			<div className="content">
				<div className="container-xl">
					<Alert type="info" title="Welcome to Tabler React Typescript">
						This project is under construction. For now, please read the{" "}
						<Alert.Link href="documentation/index.html">
							component documentation
						</Alert.Link>
						.
					</Alert>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
