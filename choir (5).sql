-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2019 at 06:21 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `choir`
--

-- --------------------------------------------------------

--
-- Table structure for table `audio_events`
--

CREATE TABLE `audio_events` (
  `audio_event_id` int(255) NOT NULL,
  `audio_name` varchar(255) NOT NULL,
  `audio_description` text NOT NULL,
  `audio_type` varchar(255) NOT NULL,
  `audio_size` int(255) NOT NULL,
  `audio_updated_by` varchar(255) NOT NULL,
  `audio_content` varchar(255) NOT NULL,
  `audio_title` varchar(255) NOT NULL,
  `audio_updated_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `audio_events`
--

INSERT INTO `audio_events` (`audio_event_id`, `audio_name`, `audio_description`, `audio_type`, `audio_size`, `audio_updated_by`, `audio_content`, `audio_title`, `audio_updated_at`) VALUES
(10, 'audio_profile-1577545656800.mp3', '', 'audio/mp3', 6268280, '', 's per page). In this example, query results are set in the results field of the response payload, while pagination metadata is set in the pagination field. As for the possibility to query based on current search result, you would have to expand a little, ', 'alot', '2020-10-21');

-- --------------------------------------------------------

--
-- Table structure for table `background`
--

CREATE TABLE `background` (
  `background_id` int(255) NOT NULL,
  `background_title` text NOT NULL,
  `background_content` text NOT NULL,
  `background_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cantique`
--

CREATE TABLE `cantique` (
  `cantique_id` int(255) NOT NULL,
  `cantique_title` text NOT NULL,
  `cantique_content` text NOT NULL,
  `cantique_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cantique`
--

INSERT INTO `cantique` (`cantique_id`, `cantique_title`, `cantique_content`, `cantique_date`) VALUES
(3, 'tyhjk', 'fghjk;', '2020-07-15'),
(4, 'vbbbbbbbbbbbbbbbbbbbbb', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', '2019-12-06');

-- --------------------------------------------------------

--
-- Table structure for table `choir_songs`
--

CREATE TABLE `choir_songs` (
  `choir_songs_id` int(255) NOT NULL,
  `choir_songs_title` text NOT NULL,
  `choir_songs_content` text NOT NULL,
  `choir_songs_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `choir_songs`
--

INSERT INTO `choir_songs` (`choir_songs_id`, `choir_songs_title`, `choir_songs_content`, `choir_songs_date`) VALUES
(3, 'efrghjklm', 'sdghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy', '2021-03-02'),
(4, 'vvvv', 'tttttttttttttttttttttttttttttttt', '2017-11-16');

-- --------------------------------------------------------

--
-- Table structure for table `dail_word`
--

CREATE TABLE `dail_word` (
  `dail_word_id` int(255) NOT NULL,
  `dail_word_title` text NOT NULL,
  `dail_word_content` text NOT NULL,
  `dail_word_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `size` int(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `updated_at` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `name`, `description`, `type`, `size`, `updated_by`, `content`, `title`, `updated_at`) VALUES
(6, 'profile-1577434702307.jpg', '', 'image/jpeg', 56699, '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores recusandae magni at. Exercitationem itaque enim delectus reiciendis quisquam. Numquam quos iste distinctio laborum sint voluptatibus, totam laboriosam facilis. Distinctio?', 'esthers', '2019-12-03'),
(7, 'profile-1577435473167.jpg', '', 'image/jpeg', 236797, '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores recusandae magni at. Exercitationem itaque enim delectus reiciendis quisquam. Numquam quos iste distinctio laborum sint voluptatibus, totam laboriosam facilis. Distinctio?', 'yklm', '2019-12-18'),
(8, 'profile-1577435487481.jpg', '', 'image/jpeg', 231905, '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores recusandae magni at. Exercitationem itaque enim delectus reiciendis quisquam. Numquam quos iste distinctio laborum sint voluptatibus, totam laboriosam facilis. Distinctio?', 'chgjbknk:;', '2019-12-04'),
(9, 'profile-1577435502572.jpg', '', 'image/jpeg', 267631, '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores recusandae magni at. Exercitationem itaque enim delectus reiciendis quisquam. Numquam quos iste distinctio laborum sint voluptatibus, totam laboriosam facilis. Distinctio?', 'hgjklm', '2019-12-03');

-- --------------------------------------------------------

--
-- Table structure for table `garelly`
--

CREATE TABLE `garelly` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `size` int(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `garelly`
--

INSERT INTO `garelly` (`id`, `name`, `description`, `type`, `size`, `updated_by`, `updated_at`) VALUES
(6, 'profile-1577458196761.jpg', '', 'image/jpeg', 228840, '', '2019-12-27 16:49:57'),
(7, 'profile-1577458208242.jpg', '', 'image/jpeg', 267631, '', '2019-12-27 16:50:09'),
(8, 'profile-1577458219314.jpg', '', 'image/jpeg', 118721, '', '2019-12-27 16:50:19'),
(9, 'profile-1577459110518.jpg', '', 'image/jpeg', 154237, '', '2019-12-27 17:05:10'),
(10, 'profile-1577459121277.jpg', '', 'image/jpeg', 101674, '', '2019-12-27 17:05:21'),
(11, 'profile-1577459141076.jpg', '', 'image/jpeg', 57324, '', '2019-12-27 17:05:41'),
(12, 'profile-1577484145069.jpg', '', 'image/jpeg', 241272, '', '2019-12-28 00:02:26');

-- --------------------------------------------------------

--
-- Table structure for table `lumen_events`
--

CREATE TABLE `lumen_events` (
  `lumen_event_id` int(255) NOT NULL,
  `lumen_name` varchar(255) NOT NULL,
  `lumen_description` text NOT NULL,
  `lumen_type` varchar(255) NOT NULL,
  `lumen_size` int(255) NOT NULL,
  `lumen_updated_by` varchar(255) NOT NULL,
  `lumen_content` varchar(255) NOT NULL,
  `lumen_title` varchar(255) NOT NULL,
  `lumen_updated_at` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lumen_events`
--

INSERT INTO `lumen_events` (`lumen_event_id`, `lumen_name`, `lumen_description`, `lumen_type`, `lumen_size`, `lumen_updated_by`, `lumen_content`, `lumen_title`, `lumen_updated_at`) VALUES
(9, 'lumen_profile-1577442852408.png', '', 'image/png', 4821, '', 'kids nnnnnnnnnnnnnn', 'aniez', '2019-12-09'),
(12, 'lumen_profile-1577520376734.jpg', '', 'image/jpeg', 202020, '', 'Use GET parameters (here page is the number of page results you want, and npp is the number of results per page).\r\n\r\nIn this example, query results are set in the results field of the response payload, while pagination metadata is set in the pagination fi', 'endrew with kids', '2020-09-09'),
(13, 'lumen_profile-1577529204486.jpg', '', 'image/jpeg', 38901, '', 'Use GET parameters (here page is the number of page results you want, and npp is the number of results per page).\r\n\r\nIn this example, query results are set in the results field of the response payload, while pagination metadata is set in the pagination fi', 'men will be men', '2020-07-29'),
(14, 'lumen_profile-1577564155578.jpg', '', 'image/jpeg', 113074, '', 'amen', 'prayers', '2019-12-13');

-- --------------------------------------------------------

--
-- Table structure for table `lumen_songs`
--

CREATE TABLE `lumen_songs` (
  `lumen_songs_id` int(255) NOT NULL,
  `lumen_songs_title` text NOT NULL,
  `lumen_songs_content` text NOT NULL,
  `lumen_songs_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lumen_songs`
--

INSERT INTO `lumen_songs` (`lumen_songs_id`, `lumen_songs_title`, `lumen_songs_content`, `lumen_songs_date`) VALUES
(2, 'i will be waiting', 'Use GET parameters (here page is the number of page results you want, and npp is the number of results per page).\r\n\r\nIn this example, query results are set in the results field of the response payload, while pagination metadata is set in the pagination field.\r\n\r\nAs for the possibility to query based on current search result, you would have to expand a little, because your question is a bit unclear.', '2020-11-24'),
(3, 'i will be waiting', 'on metadata is set in the pagination field. As for the possibility to query based on current search result, you would have to expand a little, because your question is a bit unclear.\r\n\r\n  ', '2019-12-10');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `members_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `size` int(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `mob_no` varchar(255) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`members_id`, `name`, `description`, `type`, `size`, `updated_by`, `first_name`, `last_name`, `mob_no`, `updated_at`) VALUES
(4, 'members_profile-1577434050271.jpg', '', 'image/jpeg', 154237, '', 'uwimana', ' sylivie', '07235613501', '2019-12-27 10:07:30'),
(5, 'members_profile-1577434093127.jpg', '', 'image/jpeg', 109295, '', 'Tuyambaze', 'Esther', '0723561368541', '2019-12-27 10:08:13'),
(6, 'members_profile-1577434363841.jpg', '', 'image/jpeg', 228840, '', 'all', 'members', '13', '2019-12-27 10:12:44');

-- --------------------------------------------------------

--
-- Table structure for table `mission`
--

CREATE TABLE `mission` (
  `mission_id` int(255) NOT NULL,
  `mission_title` text NOT NULL,
  `mission_content` text NOT NULL,
  `mission_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `motto`
--

CREATE TABLE `motto` (
  `motto_id` int(255) NOT NULL,
  `motto_title` text NOT NULL,
  `motto_content` text NOT NULL,
  `motto_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sunday_preachings`
--

CREATE TABLE `sunday_preachings` (
  `sunday_preachings_id` int(255) NOT NULL,
  `sunday_preachings_title` text NOT NULL,
  `sunday_preachings_content` text NOT NULL,
  `sunday_preachings_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sunday_preachings`
--

INSERT INTO `sunday_preachings` (`sunday_preachings_id`, `sunday_preachings_title`, `sunday_preachings_content`, `sunday_preachings_date`) VALUES
(3, 'luke 3:10', 'god is good and alway', '2023-03-22'),
(4, 'john 3:10', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolores recusandae magni at. Exercitationem itaque enim delectus reiciendis quisquam. Numquam quos iste distinctio laborum sint voluptatibus, totam laboriosam facilis. Distinctio?', '2019-12-05'),
(6, 'matayo 5:2', 'imana iri hafi', '2020-07-15');

-- --------------------------------------------------------

--
-- Table structure for table `testimony`
--

CREATE TABLE `testimony` (
  `testimony_id` int(255) NOT NULL,
  `testimony_email` text NOT NULL,
  `testimony_name` text NOT NULL,
  `testimony_content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `testimony`
--

INSERT INTO `testimony` (`testimony_id`, `testimony_email`, `testimony_name`, `testimony_content`) VALUES
(4, 'uwambaje@gmail.com', 'uwambaje', 'wow this is amazing'),
(5, 'uwambaje@gmail.com', 'eddy kamoso', 'hjkl='),
(6, 'uwambaje@gmail.com', 'k wiz', 'Use GET parameters (here page is the number of page results you want, and npp is the number of results per page).\r\n\r\nIn this example, query results are set in the results field of the response payload, while pagination metadata is set in the pagination field.\r\n\r\nAs for the possibility to query based on current search result, you would have to expand a little, because your question is a bit unclear.'),
(7, 'uwambaje@gmail.com', 'tayambaze', 'tayambaze');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `size` int(255) NOT NULL,
  `updated_by` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `about_me` tinytext NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `type`, `size`, `updated_by`, `email_address`, `first_name`, `last_name`, `about_me`, `updated_at`) VALUES
(1, 'admin', 'n', 'user_profile-1577398273439.jpg', 'image/jpeg', 241272, '', 'uwambajeddy@gmail.com', 'uwambaje', 'eddy', 'my god help me with this  nnnn', '2019-12-26 20:20:44');

-- --------------------------------------------------------

--
-- Table structure for table `vision`
--

CREATE TABLE `vision` (
  `vision_id` int(255) NOT NULL,
  `vision_title` text NOT NULL,
  `vision_content` text NOT NULL,
  `vision_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `worship_songs`
--

CREATE TABLE `worship_songs` (
  `worship_songs_id` int(255) NOT NULL,
  `worship_songs_title` text NOT NULL,
  `worship_songs_content` text NOT NULL,
  `worship_songs_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `worship_songs`
--

INSERT INTO `worship_songs` (`worship_songs_id`, `worship_songs_title`, `worship_songs_content`, `worship_songs_date`) VALUES
(5, 'god is good', 'Dmelhh - FlyBase Gene Report\r\nhttps://flybase.org › reports › FBgn0004644\r\nhedgehog (hh) encodes the Hh signaling pathway ligand. It acts as a morphogen contributing to segment polarity determination, stem cells maintenance and ...\r\nHH Electronics\r\nhttps://www.hhelectronics.com\r\nSteelpark Road,; Coombswood Business Park,; Halesowen, West Midlands,; B62 8HD, UK; +44 121 508 6666; info@hhelectronics.com. Designed ...\r\nhh - Wiktionary\r\nhttps://en.wiktionary.org › wiki › hh\r\nm. rush of hot air · blast from a fire · hot or burning breath, particularly of supernatural beings · steam from freshly baked bread. (figuratively) heat from the sun ...\r\nHH Global: Procurement and Creative Production Solutions\r\nhttps://www.hhglobal.com\r\nHH Global is a leading, global marketing execution partner providing outsourced creative', '2016-02-18'),
(6, 'god is good', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', '2019-12-05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audio_events`
--
ALTER TABLE `audio_events`
  ADD PRIMARY KEY (`audio_event_id`);

--
-- Indexes for table `background`
--
ALTER TABLE `background`
  ADD PRIMARY KEY (`background_id`);

--
-- Indexes for table `cantique`
--
ALTER TABLE `cantique`
  ADD PRIMARY KEY (`cantique_id`);

--
-- Indexes for table `choir_songs`
--
ALTER TABLE `choir_songs`
  ADD PRIMARY KEY (`choir_songs_id`);

--
-- Indexes for table `dail_word`
--
ALTER TABLE `dail_word`
  ADD PRIMARY KEY (`dail_word_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `garelly`
--
ALTER TABLE `garelly`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lumen_events`
--
ALTER TABLE `lumen_events`
  ADD PRIMARY KEY (`lumen_event_id`);

--
-- Indexes for table `lumen_songs`
--
ALTER TABLE `lumen_songs`
  ADD PRIMARY KEY (`lumen_songs_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`members_id`);

--
-- Indexes for table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`mission_id`);

--
-- Indexes for table `motto`
--
ALTER TABLE `motto`
  ADD PRIMARY KEY (`motto_id`);

--
-- Indexes for table `sunday_preachings`
--
ALTER TABLE `sunday_preachings`
  ADD PRIMARY KEY (`sunday_preachings_id`);

--
-- Indexes for table `testimony`
--
ALTER TABLE `testimony`
  ADD PRIMARY KEY (`testimony_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vision`
--
ALTER TABLE `vision`
  ADD PRIMARY KEY (`vision_id`);

--
-- Indexes for table `worship_songs`
--
ALTER TABLE `worship_songs`
  ADD PRIMARY KEY (`worship_songs_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audio_events`
--
ALTER TABLE `audio_events`
  MODIFY `audio_event_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `background`
--
ALTER TABLE `background`
  MODIFY `background_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cantique`
--
ALTER TABLE `cantique`
  MODIFY `cantique_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `choir_songs`
--
ALTER TABLE `choir_songs`
  MODIFY `choir_songs_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `dail_word`
--
ALTER TABLE `dail_word`
  MODIFY `dail_word_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `garelly`
--
ALTER TABLE `garelly`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `lumen_events`
--
ALTER TABLE `lumen_events`
  MODIFY `lumen_event_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `lumen_songs`
--
ALTER TABLE `lumen_songs`
  MODIFY `lumen_songs_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `members_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `mission`
--
ALTER TABLE `mission`
  MODIFY `mission_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `motto`
--
ALTER TABLE `motto`
  MODIFY `motto_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sunday_preachings`
--
ALTER TABLE `sunday_preachings`
  MODIFY `sunday_preachings_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `testimony`
--
ALTER TABLE `testimony`
  MODIFY `testimony_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vision`
--
ALTER TABLE `vision`
  MODIFY `vision_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `worship_songs`
--
ALTER TABLE `worship_songs`
  MODIFY `worship_songs_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
