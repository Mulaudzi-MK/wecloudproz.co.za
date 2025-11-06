pipeline {
    agent any

    tools {
        nodejs "Node18" // Make sure this matches the NodeJS tool name in Jenkins
    }

    environment {
        // Set NODE_ENV for production build
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo "Checking out code..."
                git branch: 'main', url: 'https://github.com/Mulaudzi-MK/wecloudproz.co.za.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing NPM dependencies...'
                // Change 'client' if your React app is in a different subfolder
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building React app...'
                dir('client') {
                    sh 'npm run build'
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                dir('client') {
                    archiveArtifacts artifacts: 'build/**', fingerprint: true
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build succeeded!'
        }
        failure {
            echo '❌ Build failed. Check console output for errors.'
        }
    }
}
