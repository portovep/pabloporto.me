export const projects = [
    {
        id: 6,
        name: 'Site to site VPN on AWS',
        date: 2018,
        role: 'Infrastructure Engineer',
        location: 'Manchester',
        description:
            '<p>Pablo was assigned as a platform engineer to help build a secure site to site VPN on the cloud between two big organisations in the UK. The VPN provides a mechanism for these organisations to exchange very confidential user information in a secure manner' +
            'In his role, Pablo contributed to bring the platform into production by:</p>' +
            '<ul>' +
            '<li>Automate the configuration of an off-the-shell VPN product (Sophos UTM) using Python/Pytest and orchestrating this configuration using Gitlab CI/CD.</li>' +
            '<li>Helping training and coaching team members on how to do infrastructure as code following continuous delivery practices.</li>' +
            '<li>Testing Sophos UTM configuration using Pytest.</li>' +
            '<li>Helping with communications with external team through different connectivity testing phases to ensure smooth integration.</li>' +
            '<li>Implementing and deploying public key infrastructure with client certificates to comply with security requirements.</li>' +
            '</ul>',
        teamSize: 6,
        technologies:
            'Terraform, Inspec, Python, PyTest, AWS, Sophos UTM, Gitlab CI/CD, Docker, Docker Compose'
    },
    {
        id: 5,
        name: 'Loan assessment platform',
        date: 2017,
        role: 'Fullstack Developer',
        location: 'Glasgow',
        description:
            '<p>Pablo was assigned as a fullstack engineer to help evolving a loans assessment platform for the government. ' +
            'In his role, Pablo contributed to bring the platform into production by:</p>' +
            '<ul>' +
            '<li>Leading the design and implementation of a SPA application using React/Redux/ES6.</li>' +
            '<li>Leading the effort to introduce a shared design system and react component library to enable the different teams to deliver UI functionality faster.</li>' +
            '<li>Extending the functionality of Clojure and Java microservices to support new types of products/loans.</li>' +
            '<li>Introducing pipelines as code to enable different teams to create new microservices faster.</li>' +
            '<li>Implementing different asynchronous integration patterns between microservices (choreography/orchestration) using RabbitMQ.</li>' +
            '<li>Acting as an internal tech lead for one of the teams and helping the team to adopt TDD, pair programming, continuous delivery and feedback practices.</li>' +
            '</ul>',
        teamSize: 12,
        technologies: 'React, Redux, ES6, Clojure, Java 8, RabbitMQ, GoCD'
    },
    {
        id: 4,
        name: 'Private PaaS for a bank',
        date: 2016,
        role: 'Infrastructure Engineer',
        location: 'Madrid',
        description:
            '<p>Pablo was assigned as a platform engineer to build a custom PaaS solution for one of the biggest banks in Spain. The PaaS was built using Openshift/Kubernetes and deployed on top of AWS first and then OpenStack. The goals were to minimise the time to market of the different digital services the bank offers, reduce costs and improve the developer experience. In his role, Pablo contributed to the platform by:</p>' +
            '<ul>' +
            '<li>Deploying a scalable and reliable Openshift/Kubernetes cluster in AWS using Terraform, Ansible and ConcourseCI.</li>' +
            '<li>Designing and implementing multi-region and multi-AZ network topologies in AWS to meet scalability and resilience requirements.</li>' +
            '<li>Deploying a scalable and reliable Openshift/Kubernetes cluster in OpenStack using Terraform, Ansible and ConcourseCI.</li>' +
            '<li>Automation of deployment, infrastructure testing (serverspec) and pipelines as code tasks using Rake and Ruby.</li>' +
            '<li>Helping with the design and implementation of a continuous delivery pipeline for infrastructure changes using ConcourseCI.</li>' +
            '<li>Advocating for DevOps principles and practices across product and platform teams.</li>' +
            '</ul>',
        teamSize: 7,
        technologies:
            'Kubernetes, Ansible, Terraform, Openshift, AWS, Openstack, ELK, ConcourseCI, RHEL/Fedora, Rake/Ruby'
    },
    {
        id: 3,
        name: 'Digital membership cloud platform',
        date: 2016,
        role: 'Infrastructure Engineer',
        location: 'Manchester',
        description:
            '<p>Pablo was assigned as a software consultant to help reduce the gap and bring together the ' +
            'development and platform teams within a programme to replatform and rebuild a digital membership service for a ' +
            'big company in the retail industry. In his role, Pablo contributed to bring the platform into production by:</p>' +
            '<ul>' +
            '<li>Helping with the design and implementation of a continuous delivery pipeline using Jenkins.</li>' +
            '<li>Advising and helping the development teams to build self-deployable microservices. Removing coupling ' +
            'between the apps (Dropwizard) and the platform.</li>' +
            '<li>Building a robust and scalable platform on AWS using EC2, S3, CloudFront, RDS, KMS, IAM, ElastiCache, ' +
            'CloudTrail and other AWS services.</li>' +
            '<li>Helping teams to implement infrastructure as code and continuous delivery of infrastructure changes using ' +
            'Terraform, Puppet, Packer and Jenkins.</li>' +
            '<li>Improving the deployment of microservices by replacing an unreliable deployment process with AWS CodeDeploy. ' +
            '<li>Enabling zero down time deployments and autoscaling.</li>' +
            '<li>Advocating for DevOps principles and practices across product and platform teams.</li>' +
            '</ul>',
        teamSize: 4,
        technologies:
            'Terraform, Puppet, EC2, S3, CloudFront, RDS, KMS, IAM, ElastiCache, CodeDeploy, Jenkins'
    },
    {
        id: 2,
        name: 'Mobile web application and platform',
        date: 2015,
        role: 'Fullstack Developer',
        location: 'Hamburg',
        description:
            '<p>Pablo was assigned as a full stack developer to deliver a custom mobile web application for a ' +
            'big wholesale retailer. The system, build with a React/Redux stack for the front-end and Spring/Cassandra for ' +
            'the back-end, helps drivers with the process of delivering goods to customers. Other tasks:</p>' +
            '<ul>' +
            '<li>Work closely with the client to define the user experience of the MVP.</li>' +
            '<li>Implement a mobile first and responsive UI for the MVP using HTML5 and SASS.' +
            '<li>Creating and managing an infrastructure based on containers (Docker) on Google Cloud. Design the ' +
            "infrastructure to be portable to the client's private cloud.</li>" +
            '<li>Lead, plan and automate the deploying of the whole system into a Kubernetes cluster using Google ' +
            'Container Engine.</li>' +
            '<li>Automating the build, testing and deployment of the different apps using GoCD as a continuous delivery tool ' +
            'and Docker container images as build artifacts.</li>' +
            '</ul>',
        teamSize: 7,
        technologies: 'React/Redux, HTML5, SASS, Java, GoCD, Kubernetes, Docker, Google Cloud'
    },
    {
        id: 1,
        name: 'Custom CMS',
        date: 2014,
        role: 'Fullstack Developer',
        location: 'Manchester',
        description:
            '<p>Pablo was assigned as a full-stack developer to deliver and operate a custom content-management ' +
            'system for thoughtworks.com. The system, build with a Ruby/Sinatra/Javascript stack, enables content managers and ' +
            'editors from different business capabilities (marketing, recruitment, sales) to easily inline edit, create and ' +
            'publish heterogeneous content using the same user interface as the company’s website. Other tasks:</p>' +
            '<ul>' +
            '<li>Improving ThoughtWorks digital presence by implementing mobile first designs and by empowering editors to ' +
            'create content through rich user interactions (JavaScript, SASS).</li>' +
            '<li>Integrating third party services to the platform by consuming RESTful APIs.</li>' +
            '<li>Keeping the project automated test suite healthy by implementing unit, integration, functional and ' +
            'end-to-end automated tests.</li>' +
            '<li>Managing the project’s cloud infrastructure by automating deployment tasks (Rake, Fabric) and improving ' +
            'configuration management (Puppet, Packer).</li>' +
            '<li>Enabling continuous delivery by supporting and managing monitoring (collectd and Graphite), logging ' +
            '(logstash and Kibana) and continuous integration tools (GoCD).</li>' +
            '</li>Improving provisioning, deployment and build scripts to enable migration from snowflake servers to ' +
            'phoenix servers.</p>' +
            '</ul>',
        teamSize: 12,
        technologies: 'Ruby, JavaScript, JQuery, SASS, Graphite, GoCD, ELK, Rackspace'
    }
];
