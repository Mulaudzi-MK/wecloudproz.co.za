pipeline {
    agent any

    tools {
        nodejs "Node18" // Make sure Node 18 is configured in Jenkins tools
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code...'
                git branch: 'main', url: 'https://github.com/Mulaudzi-MK/wecloudproz.co.za.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing NPM dependencies...'
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building React app...'
                dir('client') {
                    // Use npx to run the local Vite build
                    sh 'npx vite build'
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                echo 'Archiving build artifacts...'
                dir('client') {
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                }
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed. Check console output for errors.'
        }
        success {
            echo '✅ Build succeeded!'
        }
    }
}
