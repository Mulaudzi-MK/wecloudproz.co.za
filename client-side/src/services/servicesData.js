import Cloud from "../../public/icons/Cloud";
import Computer from "../../public/icons/Computer";
import Currency from "../../public/icons/Currency";
import Database from "../../public/icons/Database";
import Setting from "../../public/icons/Settings";
import Sheild from "../../public/icons/Sheild";

const servicesData = [
  {
    title: "Backup and Storage Solutions",
    description: "Safeguard your valuable data with our robust backup and storage solutions. We offer scalable storage options, automated backups, and reliable disaster recovery strategies to ensure business continuity and data integrity.",
    icon: Database
  },
  {
    title: "Infrastructure as a Service (IaaS)",
    description: "Unlock the power of scalable infrastructure without the hassle of managing hardware. With our IaaS solutions, you gain access to virtualized resources including servers, storage, and networking, enabling rapid deployment and flexibility to meet evolving business demands.",
    icon: Computer
  },
  {
    title: "Platform as a Service (PaaS)",
    description: "Accelerate application development and deployment with our PaaS offerings. We provide a comprehensive platform for developers to build, test, and deploy applications seamlessly, leveraging cloud-native technologies and automation for increased agility and productivity.",
    icon: Setting
  },
  {
    title: "Cloud Migration Services",
    description: "Seamlessly transition your workloads to the cloud with our expert migration services. Whether you're moving from on-premises infrastructure or transitioning between cloud providers, our certified professionals ensure a smooth and efficient migration process, minimizing downtime and optimizing performance.",
    icon: Cloud
  },
  {
    title: "Cloud Security Solutions",
    description: "Protect your digital assets and mitigate security risks with our advanced cloud security solutions. From identity and access management to threat detection and encryption, we employ industry-leading practices to safeguard your data and infrastructure against cyber threats and compliance breaches.",
    icon: Sheild
  },
  {
    title: "Cost Optimization Strategies",
    description: "Maximize the value of your cloud investment with our cost optimization strategies. Our experts analyze your cloud usage patterns, identify cost-saving opportunities, and implement optimization techniques such as rightsizing, reserved instances, and automation to optimize your cloud spend without compromising performance.",
    icon: Currency
  }
];

export default servicesData;
