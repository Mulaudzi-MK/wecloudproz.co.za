pipeline {
    agent any

    environment {
        NODE_HOME = '/usr/bin' // Path to NodeJS (update if you use a Node tool in Jenkins)
        PATH = "${NODE_HOME}:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Mulaudzi-MK/wecloudproz.co.za.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing NPM dependencies...'
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building production React app...'
                sh 'npm run build'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                echo 'Archiving build folder...'
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

        stage('Deploy (Optional)') {
            steps {
                echo 'You can deploy to S3, EC2, or Nginx here.'
                // Example for S3:
                // sh 'aws s3 sync build/ s3://your-s3-bucket-name --delete'
            }
        }
    }

    post {
        success {
            echo '✅ Build and pipeline completed successfully!'
        }
        failure {
            echo '❌ Build failed. Check console output for errors.'
        }
    }
}
