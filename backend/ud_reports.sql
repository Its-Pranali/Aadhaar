-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2026 at 02:09 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ud_reports`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdpos`
--

CREATE TABLE `cdpos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `agency` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `taluka` varchar(200) NOT NULL,
  `office` varchar(255) NOT NULL,
  `officer_name` varchar(255) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `cdpo_email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `center_id` varchar(255) NOT NULL,
  `station_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cdpos`
--

INSERT INTO `cdpos` (`id`, `agency`, `district`, `taluka`, `office`, `officer_name`, `mobile`, `cdpo_email`, `address`, `pincode`, `center_id`, `station_id`, `created_at`, `updated_at`, `status`) VALUES
(14, '1', 'Sangli', 'Walwa', 'CPFO Sangli', 'New Office', '9221313121', 'new123@gmail.com', 'Sangli', '786545', 'STG453', 'CT4352', '2026-01-13 04:04:33', '2026-01-13 06:19:32', '0'),
(15, '1', 'Satara', 'Karad', 'Karad Office', 'Ram', '7890564756', 'ram123@gmail.com', 'Saidapur road,Karad.', '646574', 'ST5643', 'FD456T', '2026-01-13 04:36:01', '2026-01-13 04:36:01', ''),
(16, '1', 'Satara', 'Patan', 'Satara Office', 'Sham', '9086342532', 'sham123@gmail.com', 'Patan Road Satara', '567876', 'FGD435', 'ASD453', '2026-01-13 05:52:09', '2026-01-13 05:52:09', ''),
(17, '1', 'Sangli', 'Palus', 'CPFO Sangli', 'Radha', '8907654321', 'radha1234@gmail.com', 'Palus', '765342', 'STG453', 'CT4350', '2026-01-13 06:10:09', '2026-01-13 06:10:09', '1');

-- --------------------------------------------------------

--
-- Table structure for table `centers`
--

CREATE TABLE `centers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `agency` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `taluka` varchar(255) NOT NULL,
  `center_code` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `allocate_status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `centers`
--

INSERT INTO `centers` (`id`, `agency`, `state`, `district`, `taluka`, `center_code`, `status`, `allocate_status`, `created_at`, `updated_at`) VALUES
(1, '1', '1', '29', '26', 'test', '1', '1', '2026-01-12 07:04:47', '2026-01-12 07:04:47'),
(2, '2', '1', '1', '1', 'Demo', '1', '1', '2026-01-12 07:38:51', '2026-01-12 07:38:51'),
(3, '1', '1', '5', '48', 'CF234R', '2', '1', '2026-01-12 07:39:50', '2026-01-12 07:39:50');

-- --------------------------------------------------------

--
-- Table structure for table `c_d_p_o_s`
--

CREATE TABLE `c_d_p_o_s` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `agency` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `taluka` varchar(255) NOT NULL,
  `office` varchar(255) NOT NULL,
  `officer_name` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `cdpo_email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `pincode` varchar(255) NOT NULL,
  `center_id` varchar(255) NOT NULL,
  `station_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `district` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`id`, `district`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Kolhapur', '1', '2026-01-14 05:26:07', '2026-01-14 05:26:07'),
(2, 'Sangli', '1', '2026-01-14 05:42:19', '2026-01-14 05:42:19'),
(3, 'Satara', '1', '2026-01-14 05:45:21', '2026-01-14 05:45:21'),
(4, 'Pune', '1', '2026-01-14 05:46:53', '2026-01-14 05:46:53'),
(5, 'Solapur', '1', '2026-01-14 10:00:06', '2026-01-14 10:00:06'),
(6, 'Ahmednagar', '1', '2026-01-14 23:07:24', '2026-01-15 06:17:46'),
(7, 'Akola', '1', '2026-01-14 23:07:36', '2026-01-14 23:07:36'),
(8, 'Amravati', '1', '2026-01-14 23:07:46', '2026-01-14 23:07:46'),
(9, 'Aurangabad', '1', '2026-01-14 23:08:02', '2026-01-14 23:08:02'),
(10, 'Beed', '1', '2026-01-14 23:08:17', '2026-01-14 23:08:17'),
(11, 'Bhandara', '1', '2026-01-14 23:08:31', '2026-01-14 23:08:31'),
(12, 'Buldhana', '1', '2026-01-14 23:08:45', '2026-01-14 23:08:45'),
(13, 'Chandrapur', '1', '2026-01-14 23:08:56', '2026-01-14 23:08:56'),
(14, 'Dhule', '1', '2026-01-14 23:09:18', '2026-01-14 23:09:18'),
(15, 'Gadchiroli', '1', '2026-01-14 23:55:56', '2026-01-14 23:55:56'),
(16, 'Gondia', '1', '2026-01-14 23:56:07', '2026-01-14 23:56:07'),
(17, 'Hingoli', '1', '2026-01-14 23:56:19', '2026-01-14 23:56:19'),
(18, 'Jalgaon', '1', '2026-01-14 23:56:31', '2026-01-14 23:56:31'),
(19, 'Jalna', '1', '2026-01-14 23:56:42', '2026-01-14 23:56:42'),
(20, 'Latur', '1', '2026-01-14 23:58:10', '2026-01-14 23:58:10'),
(21, 'Mumbai City', '1', '2026-01-14 23:58:22', '2026-01-14 23:58:22'),
(22, 'Mumbai Suburban', '1', '2026-01-14 23:58:34', '2026-01-14 23:58:34'),
(23, 'Nagpur', '1', '2026-01-14 23:58:44', '2026-01-14 23:58:44'),
(24, 'Nanded', '1', '2026-01-14 23:58:54', '2026-01-14 23:58:54'),
(25, 'Nandurbar', '1', '2026-01-14 23:59:05', '2026-01-14 23:59:05'),
(26, 'Nashik', '1', '2026-01-14 23:59:16', '2026-01-14 23:59:16'),
(27, 'Osmanabad', '1', '2026-01-14 23:59:28', '2026-01-14 23:59:28'),
(28, 'Palghar', '1', '2026-01-14 23:59:40', '2026-01-14 23:59:40'),
(29, 'Parbhani', '1', '2026-01-14 23:59:50', '2026-01-14 23:59:50'),
(30, 'Raigad', '1', '2026-01-15 00:00:07', '2026-01-15 00:00:07'),
(31, 'Ratnagiri', '1', '2026-01-15 00:00:17', '2026-01-15 00:00:17'),
(32, 'Sindhudurg', '1', '2026-01-15 00:00:48', '2026-01-15 00:00:48'),
(33, 'Thane', '1', '2026-01-15 00:00:59', '2026-01-15 00:00:59'),
(34, 'Wardha', '1', '2026-01-15 00:01:09', '2026-01-15 00:01:09'),
(35, 'Washim', '1', '2026-01-15 00:01:20', '2026-01-15 00:01:20'),
(36, 'Yavatmal', '1', '2026-01-15 00:01:31', '2026-01-15 00:01:31');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2026_01_12_114156_create_centers_table', 1),
(2, '2026_01_13_061827_create_cdpos_table', 2),
(3, '0001_01_01_000000_create_users_table', 3),
(4, '0001_01_01_000001_create_cache_table', 3),
(5, '0001_01_01_000002_create_jobs_table', 3),
(6, '2026_01_13_061420_create_c_d_p_o_s_table', 3),
(7, '2026_01_13_113726_update_cdpo_table', 4),
(8, '2026_01_13_181314_create_districts_table', 5),
(9, '2026_01_15_085914_create_talukas_table', 6),
(10, '2026_01_15_125638_create_vendors_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `talukas`
--

CREATE TABLE `talukas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `district` int(11) NOT NULL,
  `taluka` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `talukas`
--

INSERT INTO `talukas` (`id`, `district`, `taluka`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Walwa', '0', '2026-01-15 04:42:40', '2026-01-15 05:25:02'),
(2, 2, 'Shirala', '1', '2026-01-15 04:54:56', '2026-01-15 04:54:56'),
(3, 1, 'Panhala', '1', '2026-01-15 04:55:33', '2026-01-15 04:55:33'),
(4, 3, 'Karad', '1', '2026-01-15 05:33:35', '2026-01-15 05:33:35'),
(5, 3, 'Patan', '1', '2026-01-15 05:40:16', '2026-01-15 05:40:16'),
(6, 6, 'Akola', '1', '2026-01-15 05:55:36', '2026-01-15 05:55:36'),
(7, 6, 'Jamkhed', '1', '2026-01-15 05:55:50', '2026-01-15 05:55:50'),
(8, 6, 'Karjat', '1', '2026-01-15 05:56:07', '2026-01-15 05:56:07'),
(9, 6, 'Kopargaon', '1', '2026-01-15 06:22:49', '2026-01-15 06:22:49'),
(10, 6, 'Nagar', '1', '2026-01-15 06:23:02', '2026-01-15 06:23:02'),
(11, 6, 'Nevasa', '1', '2026-01-15 06:23:16', '2026-01-15 06:23:16'),
(12, 6, 'Parner', '1', '2026-01-15 06:23:33', '2026-01-15 06:23:33'),
(13, 6, 'Pathardi', '1', '2026-01-15 06:23:46', '2026-01-15 07:03:40'),
(14, 6, 'Rahta', '1', '2026-01-15 06:24:13', '2026-01-15 07:03:48'),
(15, 6, 'Rahuri', '1', '2026-01-15 06:24:26', '2026-01-15 06:28:47'),
(16, 6, 'Sangamner', '1', '2026-01-15 06:24:40', '2026-01-15 06:24:40'),
(17, 6, 'Shevgaon', '1', '2026-01-15 06:24:54', '2026-01-15 06:24:54'),
(18, 6, 'Shrigonda', '1', '2026-01-15 06:25:11', '2026-01-15 06:25:11'),
(19, 6, 'Shrirampur', '1', '2026-01-15 06:25:24', '2026-01-15 06:25:24'),
(20, 7, 'Akola', '1', '2026-01-15 06:25:37', '2026-01-15 06:25:37'),
(21, 7, 'Akot', '1', '2026-01-15 06:25:50', '2026-01-15 06:25:50'),
(22, 7, 'Balapur', '1', '2026-01-15 06:26:05', '2026-01-15 06:26:05'),
(23, 7, 'Barshitakli', '1', '2026-01-15 06:26:17', '2026-01-15 06:26:17'),
(24, 7, 'Murtijapur', '1', '2026-01-15 06:26:31', '2026-01-15 06:26:31'),
(25, 7, 'Patur', '1', '2026-01-15 06:26:43', '2026-01-15 06:26:43'),
(26, 7, 'Telhara', '1', '2026-01-15 06:27:02', '2026-01-15 06:27:02'),
(27, 8, 'Achalpur', '1', '2026-01-15 06:27:15', '2026-01-15 06:27:15'),
(28, 8, 'Amravati', '1', '2026-01-15 06:27:30', '2026-01-15 06:27:30'),
(29, 8, 'Anjangaon Surji', '1', '2026-01-15 06:27:45', '2026-01-15 06:27:45'),
(30, 8, 'Bhatkuli', '1', '2026-01-15 06:28:02', '2026-01-15 06:28:02'),
(31, 8, 'Chandur Railway', '1', '2026-01-15 06:29:47', '2026-01-15 06:29:47'),
(32, 8, 'Chandurbazar', '1', '2026-01-15 06:30:06', '2026-01-15 06:30:06'),
(33, 9, 'Aurangabad', '1', '2026-01-15 06:30:24', '2026-01-15 06:30:24'),
(34, 9, 'Gangapur', '1', '2026-01-15 06:30:37', '2026-01-15 06:30:37'),
(35, 9, 'Kannad', '1', '2026-01-15 06:30:49', '2026-01-15 06:30:49'),
(36, 9, 'Khuldabad', '1', '2026-01-15 06:31:07', '2026-01-15 06:31:07'),
(37, 10, 'Ambejogai', '1', '2026-01-15 06:31:31', '2026-01-15 06:31:31'),
(38, 10, 'Ashti', '1', '2026-01-15 06:31:43', '2026-01-15 06:31:43'),
(39, 10, 'Bid', '1', '2026-01-15 06:31:56', '2026-01-15 06:31:56'),
(40, 10, 'Dharur', '1', '2026-01-15 06:32:09', '2026-01-15 06:32:09'),
(41, 10, 'Georai', '1', '2026-01-15 06:32:25', '2026-01-15 06:32:25'),
(42, 10, 'Kaij', '1', '2026-01-15 06:39:29', '2026-01-15 06:39:29'),
(43, 11, 'Bhandara', '1', '2026-01-15 06:39:55', '2026-01-15 06:39:55'),
(44, 11, 'Lakhandur', '1', '2026-01-15 06:40:08', '2026-01-15 06:40:08'),
(45, 11, 'Lakhani', '1', '2026-01-15 06:40:21', '2026-01-15 06:40:21'),
(46, 11, 'Mohadi', '1', '2026-01-15 06:40:36', '2026-01-15 06:40:36'),
(47, 11, 'Pauni', '1', '2026-01-15 06:40:51', '2026-01-15 06:40:51'),
(48, 12, 'Buldhana', '1', '2026-01-15 06:41:09', '2026-01-15 06:41:09'),
(49, 12, 'Chikhli', '1', '2026-01-15 06:41:23', '2026-01-15 06:41:23'),
(50, 12, 'Deolgaon Raja', '1', '2026-01-15 06:41:37', '2026-01-15 06:41:37'),
(51, 12, 'Jalgaon (Jamod)', '1', '2026-01-15 06:41:52', '2026-01-15 06:41:52'),
(52, 12, 'Khamgaon', '1', '2026-01-15 06:42:04', '2026-01-15 06:42:04'),
(53, 12, 'Lonar', '1', '2026-01-15 06:42:17', '2026-01-15 06:42:17'),
(54, 13, 'Ballarpur', '1', '2026-01-15 06:42:39', '2026-01-15 06:42:39'),
(55, 13, 'Bhadravati', '1', '2026-01-15 06:42:53', '2026-01-15 06:42:53'),
(56, 13, 'Brahmapuri', '1', '2026-01-15 06:43:05', '2026-01-15 06:43:05'),
(57, 13, 'Chandrapur', '1', '2026-01-15 06:43:19', '2026-01-15 06:43:19'),
(58, 13, 'Chimur', '1', '2026-01-15 06:43:31', '2026-01-15 06:43:31'),
(59, 13, 'Gondpipri', '1', '2026-01-15 06:43:43', '2026-01-15 06:43:43'),
(60, 14, 'Dhule', '1', '2026-01-15 06:44:04', '2026-01-15 06:44:04'),
(61, 14, 'Sakri', '1', '2026-01-15 06:44:18', '2026-01-15 06:44:18'),
(62, 14, 'Shirpur', '1', '2026-01-15 06:44:30', '2026-01-15 06:44:30'),
(63, 14, 'Sindkhede', '1', '2026-01-15 06:44:43', '2026-01-15 06:44:43'),
(64, 15, 'Aheri', '1', '2026-01-15 06:44:58', '2026-01-15 06:44:58'),
(65, 15, 'Armori', '1', '2026-01-15 06:45:11', '2026-01-15 06:45:11'),
(66, 15, 'Bhamragad', '1', '2026-01-15 06:45:23', '2026-01-15 06:45:23'),
(67, 15, 'Chamorshi', '1', '2026-01-15 06:45:36', '2026-01-15 06:45:36'),
(68, 15, 'Desaiganj (Vadasa)', '1', '2026-01-15 06:45:50', '2026-01-15 06:45:50'),
(69, 15, 'Dhanora', '1', '2026-01-15 06:46:04', '2026-01-15 06:46:04'),
(70, 16, 'Amgaon', '1', '2026-01-15 06:46:25', '2026-01-15 06:46:25'),
(71, 16, 'Arjuni Morgaon', '1', '2026-01-15 06:46:39', '2026-01-15 06:46:39'),
(72, 16, 'Deori', '1', '2026-01-15 06:46:52', '2026-01-15 06:46:52'),
(73, 16, 'Gondiya', '1', '2026-01-15 06:47:06', '2026-01-15 06:47:06'),
(74, 16, 'Goregaon', '1', '2026-01-15 06:47:22', '2026-01-15 06:47:22'),
(75, 17, 'Aundha (Nagnath)', '1', '2026-01-15 06:47:41', '2026-01-15 06:47:41'),
(76, 17, 'Basmath', '1', '2026-01-15 06:47:55', '2026-01-15 06:47:55'),
(77, 17, 'Hingoli', '1', '2026-01-15 06:48:07', '2026-01-15 06:48:07'),
(78, 17, 'Kalamnuri', '1', '2026-01-15 06:48:20', '2026-01-15 06:48:20'),
(79, 17, 'Sengaon', '1', '2026-01-15 06:48:34', '2026-01-15 06:48:34'),
(80, 18, 'Amalner', '1', '2026-01-15 06:48:49', '2026-01-15 06:48:49'),
(81, 18, 'Bhadgaon', '1', '2026-01-15 06:49:04', '2026-01-15 06:49:04'),
(82, 18, 'Bhusawal', '1', '2026-01-15 06:49:19', '2026-01-15 06:49:19'),
(83, 18, 'Bodvad', '1', '2026-01-15 06:49:33', '2026-01-15 06:49:33'),
(84, 19, 'Ambad', '1', '2026-01-15 06:49:58', '2026-01-15 06:49:58'),
(85, 19, 'Badnapur', '1', '2026-01-15 06:50:16', '2026-01-15 06:50:16'),
(86, 19, 'Bhokardan', '1', '2026-01-15 06:50:32', '2026-01-15 06:50:32'),
(87, 19, 'Ghansawangi', '1', '2026-01-15 06:50:45', '2026-01-15 06:50:45'),
(88, 19, 'Jafferabad', '1', '2026-01-15 06:51:00', '2026-01-15 06:51:00'),
(89, 19, 'Jalna', '1', '2026-01-15 06:51:14', '2026-01-15 06:51:14'),
(90, 19, 'Mantha', '1', '2026-01-15 06:51:30', '2026-01-15 06:51:30'),
(91, 19, 'Partur', '1', '2026-01-15 06:51:46', '2026-01-15 06:51:46'),
(92, 1, 'Ajra', '1', '2026-01-15 06:52:10', '2026-01-15 06:52:10'),
(93, 1, 'Bhudargad', '1', '2026-01-15 06:52:22', '2026-01-15 06:52:22'),
(94, 1, 'Chandgad', '1', '2026-01-15 06:52:35', '2026-01-15 06:52:35'),
(95, 1, 'Gadhinglaj', '1', '2026-01-15 06:52:47', '2026-01-15 06:52:47'),
(96, 1, 'Gagan Bavda', '1', '2026-01-15 06:53:00', '2026-01-15 06:53:00'),
(97, 1, 'Hatkanangle', '1', '2026-01-15 06:53:12', '2026-01-15 06:53:12'),
(98, 1, 'Kagal', '1', '2026-01-15 06:53:24', '2026-01-15 06:53:24'),
(99, 1, 'Karvir', '1', '2026-01-15 06:53:35', '2026-01-15 06:53:35'),
(100, 1, 'Radhanagari', '1', '2026-01-15 06:53:54', '2026-01-15 06:53:54'),
(101, 1, 'Shahuwadi', '1', '2026-01-15 06:54:07', '2026-01-15 06:54:07'),
(102, 1, 'Shirol', '1', '2026-01-15 06:54:18', '2026-01-15 06:54:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vendor_name` varchar(255) NOT NULL,
  `vendor_mobile` varchar(15) NOT NULL,
  `vendor_email` varchar(255) NOT NULL,
  `vendor_address` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cdpos`
--
ALTER TABLE `cdpos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cdpos_cdpo_email_unique` (`cdpo_email`);

--
-- Indexes for table `centers`
--
ALTER TABLE `centers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `c_d_p_o_s`
--
ALTER TABLE `c_d_p_o_s`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `c_d_p_o_s_cdpo_email_unique` (`cdpo_email`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `talukas`
--
ALTER TABLE `talukas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `vendors`
--
ALTER TABLE `vendors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vendors_vendor_email_unique` (`vendor_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cdpos`
--
ALTER TABLE `cdpos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `centers`
--
ALTER TABLE `centers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `c_d_p_o_s`
--
ALTER TABLE `c_d_p_o_s`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `talukas`
--
ALTER TABLE `talukas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vendors`
--
ALTER TABLE `vendors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
